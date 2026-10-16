import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  APP_ENV: z.enum(['local', 'staging', 'production']).default('local'),
  DATABASE_URI: z.string().url().min(1, 'DATABASE_URI is required for PostgreSQL connection'),
  PAYLOAD_SECRET: z.string().min(16, 'PAYLOAD_SECRET must be at least 16 characters long'),
  NEXT_PUBLIC_SERVER_URL: z.string().url().default('http://localhost:3000'),
  // Staging environment protection (Basic Auth + noindex)
  STAGING_BASIC_AUTH_USER: z.string().optional(),
  STAGING_BASIC_AUTH_PASS: z.string().optional(),
});

function parseEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error('❌ FATAL: Invalid or missing environment variables:');
    console.error(result.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables. Check .env against .env.example.');
  }
  return result.data;
}

export const env = parseEnv();
