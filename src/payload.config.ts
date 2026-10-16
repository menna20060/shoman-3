import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

import { Admins } from './collections/Admins';
import { AdminSessions } from './collections/AdminSessions';
import { LoginAttempts } from './collections/LoginAttempts';
import { AuditLogs } from './collections/AuditLogs';
import { Products } from './collections/Products';
import { ProductCategories } from './collections/ProductCategories';
import { OptionalFeatures } from './collections/OptionalFeatures';
import { TabletOptions } from './collections/TabletOptions';
import { TheaterServices } from './collections/TheaterServices';
import { TheaterSections } from './collections/TheaterSections';
import { Brands } from './collections/Brands';
import { Media } from './collections/Media';
import { Projects } from './collections/Projects';
import { Downloads } from './collections/Downloads';
import { Pages } from './collections/Pages';
import { Redirects } from './collections/Redirects';
import { TelescopicSeating } from './globals/TelescopicSeating';

export default buildConfig({
  admin: {
    user: 'admins',
  },
  editor: lexicalEditor({}),
  collections: [
    Admins,
    AdminSessions,
    LoginAttempts,
    AuditLogs,
    Products,
    ProductCategories,
    OptionalFeatures,
    TabletOptions,
    TheaterServices,
    TheaterSections,
    Brands,
    Media,
    Projects,
    Downloads,
    Pages,
    Redirects,
  ],
  globals: [
    TelescopicSeating,
  ],
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-build-min-16-characters',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgres://postgres:postgres@127.0.0.1:5432/mti_db',
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 10,
      min: 2,
      idleTimeoutMillis: 30000,
    },
    migrationDir: path.resolve(dirname, '../migrations'),
  }),
});
