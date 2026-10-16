/**
 * MTI Validation Library (T10)
 * Adheres strictly to B2B architecture rules and acceptance criteria.
 */

export const validateSlug = (val?: string | null): true | string => {
  if (!val) return 'Slug is required.';
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!slugRegex.test(val)) {
    return 'Slug must contain only lowercase alphanumeric characters and single hyphens (e.g., "pro-audio").';
  }
  return true;
};

export const validateProductCode = (val?: string | null): true | string => {
  if (!val) return 'Product code is required.';
  const codeRegex = /^[A-Za-z0-9_-]{2,30}$/;
  if (!codeRegex.test(val)) {
    return 'Product code must be alphanumeric between 2-30 characters (e.g., "MTI-A101").';
  }
  return true;
};

export const validateAbsorption = (val?: number | null): true | string => {
  if (val === undefined || val === null) return true; // Optional field
  if (typeof val !== 'number' || isNaN(val)) return 'Acoustic absorption must be a valid number.';
  if (val < 0 || val > 100) {
    return 'Acoustic absorption coefficient must be between 0 and 100 (percentage).';
  }
  return true;
};

export const validatePhoneE164 = (val?: string | null): true | string => {
  if (!val) return true; // Optional if not filled
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  if (!e164Regex.test(val)) {
    return 'Phone number must follow international E.164 format (e.g., "+966112345678" or "+201012345678").';
  }
  return true;
};

export const validateEmail = (val?: string | null): true | string => {
  if (!val) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    return 'Invalid email address format.';
  }
  return true;
};

export const validateHttpsUrl = (val?: string | null): true | string => {
  if (!val) return true;
  try {
    const parsed = new URL(val);
    if (parsed.protocol !== 'https:') {
      return 'URLs must use secure HTTPS protocol ("https://").';
    }
    return true;
  } catch {
    return 'Invalid URL format.';
  }
};

export const validatePositiveDimension = (val?: number | null): true | string => {
  if (val === undefined || val === null) return true;
  if (typeof val !== 'number' || isNaN(val) || val <= 0) {
    return 'Dimensions must be positive numbers greater than 0.';
  }
  return true;
};

/**
 * Publish Gate Validator (T10)
 * Enforces minimum bilingual completeness when publishing a document.
 * Missing optional fields are allowed; missing core fields fail with explicit field names and language.
 */
export interface PublishGateFields {
  ar: { name: string; label: string }[];
  en: { name: string; label: string }[];
}

export const checkPublishGate = (
  doc: Record<string, any>,
  required: PublishGateFields
): void => {
  const isPublishing = doc._status === 'published' || doc.status === 'published';
  if (!isPublishing) return; // Drafts are free of publication gates

  const missingErrors: string[] = [];

  for (const field of required.ar) {
    const val = doc[field.name];
    if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
      missingErrors.push(`[Arabic: ${field.label}]`);
    }
  }

  for (const field of required.en) {
    const val = doc[field.name];
    if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
      missingErrors.push(`[English: ${field.label}]`);
    }
  }

  if (missingErrors.length > 0) {
    throw new Error(
      `Publish Gate Error: Cannot publish document. The following required bilingual fields are missing: ${missingErrors.join(', ')}`
    );
  }
};
