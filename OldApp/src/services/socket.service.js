import io from 'socket.io-client';
import config from "../../environment/environment";
let socket;
export const connect = async () => {
    socket = io(`${config.api.base_uri}`);
};

export const disconnect = async() => {
    socket.disconnect();
};


connect();