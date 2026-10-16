import type { CollectionAfterChangeHook } from 'payload';

export const createRedirectOnSlugChange = (
  basePath: string,
  entityType: string
): CollectionAfterChangeHook => {
  return async ({ doc, previousDoc, req, operation }) => {
    if (operation !== 'update' || !previousDoc) return doc;

    const oldSlug = previousDoc.slug;
    const newSlug = doc.slug;

    if (oldSlug && newSlug && oldSlug !== newSlug) {
      const fromPath = `${basePath}/${oldSlug}`.replace(/\/+/g, '/');
      const toPath = `${basePath}/${newSlug}`.replace(/\/+/g, '/');

      try {
        // Upsert redirect record in redirects collection
        const existing = await req.payload.find({
          collection: 'redirects',
          where: {
            from: { equals: fromPath },
          },
          limit: 1,
        });

        if (existing.docs.length > 0) {
          await req.payload.update({
            collection: 'redirects',
            id: existing.docs[0].id,
            data: {
              to: toPath,
              statusCode: '301',
              entityType,
              entityId: String(doc.id),
            },
          });
        } else {
          await req.payload.create({
            collection: 'redirects',
            data: {
              from: fromPath,
              to: toPath,
              statusCode: '301',
              entityType,
              entityId: String(doc.id),
            },
          });
        }
      } catch (err) {
        req.payload.logger.error(`Failed to create automatic 301 redirect for ${fromPath} -> ${toPath}:`, err);
      }
    }

    return doc;
  };
};
