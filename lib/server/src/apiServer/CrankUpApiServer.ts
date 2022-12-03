import fastify from 'fastify';
import { srvHost, srvPort } from '../utils';
import { fastifyOptions } from './configs';

// Create a Fastify server
const app = fastify(fastifyOptions);

/**
 * Start the server
 */
export const CrankUpApiServer = async () => {
  try {
    // Route to test the server.
    app.get('/', async (request, reply) => {
      return reply.send(request.body || 'Hello! This is the API Server!');
    });
    // Listener for the server.
    app.listen({ port: srvPort, host: srvHost }, function (err, address) {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }
      `Server is now listening on ${address}`;
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
