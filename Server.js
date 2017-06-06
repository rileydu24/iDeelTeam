"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const App_1 = require("./App");
class Server {
    constructor() {
        debug('ts-express:server');
        this.portValue = this.normalizePort(process.env.PORT || 3000);
        App_1.default.set('port', this.portValue);
        this.server = http.createServer(App_1.default);
        this.server.listen(this.portValue);
        this.server.on('error', (error) => {
            if (error.syscall !== 'listen')
                throw error;
            let bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
            switch (error.code) {
                case 'EACCES':
                    console.error(`${bind} requires elevated privileges`);
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(`${bind} is already in use`);
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        });
        this.server.on('listening', () => {
            let addr = this.server.address();
            let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
            debug(`Listening on ${bind}`);
        });
    }
    normalizePort(val) {
        let port = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port))
            return val;
        else if (port >= 0)
            return port;
        else
            return false;
    }
}
new Server();
