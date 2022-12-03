import { FastifyServerOptions } from 'fastify';

/**
 * Fastify server options
 */
export const fastifyOptions: FastifyServerOptions = {
  logger: {
    transport: {
      // Beautify the logs.
      target: '@fastify/one-line-logger',
    },
  },
};
