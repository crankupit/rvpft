import dotenv from 'dotenv';
dotenv.config();

/**
 * This is the list of environment variables used by the application.
 */
export const srvPort = Number(process.env['SERVER_PORT']) || 3000;
export const srvHost = String(process.env['SERVER_HOST']) || '127.0.0.1';
