import axios from "axios";
import config from "../../environment/environment";

export const newChat = async (sender, receiver, messages) => {
  const uri = `${config.api.base_uri}/chat`;
  try {
    const res = await axios.post(uri, {
      sender,
      receiver,
      messages,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchChats = async (id) => {
  const uri = `${config.api.base_uri}/chat/chats/${id}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMessages = async (sender, receiver) => {
  const uri = `${config.api.base_uri}/chat/messages/${sender}/${receiver}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
