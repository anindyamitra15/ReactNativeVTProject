/**
 * This is the environment or config file for this project
 * the isDev flag decides on which environment to use
 * if isDev is true, development configuration will be used
 * else production configuration will be used
 */
const isDev = true;

const api_config_dev = {
    base_uri: "http://192.168.0.248:3300", //IP address of the PC in your LAN

};

const api_config_prod = {
    base_uri: "yourapi.domain.com",

};

const config = {
    type: isDev ? "development" : "production",
    api: isDev ? api_config_dev : api_config_prod
};

export default config;