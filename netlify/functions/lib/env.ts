// Environment variables for server context
export function getServerEnv(key: string): string {
  // Remove VITE_ prefix for server environment variables
  const value = process.env[key.replace('VITE_', '')];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}