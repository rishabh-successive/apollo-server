import Server  from './Server.js';
import config from './config/configurations';
import schema from './modules';

const server = new Server(config);

server.bootstrap().setupApollo(schema);