
import * as dotenv from 'dotenv';
const envVars = dotenv.config();

const config = {
    port: envVars.parsed.PORT,
    nodeEnv: envVars.parsed.NODE_ENV,
    serviceUrl: envVars.serviceUrl
};

Object.freeze(
    config
);

export default config;
