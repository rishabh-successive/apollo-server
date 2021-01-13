// import * as express from 'express';
var express = require('express')
import { ApolloServer } from 'apollo-server-express';

class Server {
    app
    constructor(config) {
        this.app = express();
    }

    bootstrap() {
        this.setupApollo();
        return this;
    }

    async setupApollo(schema) {
        const { app } = this;

        this.Server = new ApolloServer({
            ...schema,
            onHealhCheck: () => new Promise((resolve) => {
                resolve('Route is running');
            }),
        });
        this.Server.applyMiddleware({ app });
        this.run();
    }

    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if(err) {
                console.log(err);
            }
            console.log(`App is running on PORT ${ port }`);
        });
    }

}

export default Server;
