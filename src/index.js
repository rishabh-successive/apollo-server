import Server  from './Server.js';
import { configuration } from './config';
import schema from './modules';

const server = new Server(configuration);

server.bootstrap().setupApollo(schema);