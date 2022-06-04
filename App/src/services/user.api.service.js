import axios from "axios";
import config from "../../environment/environment";

export const register = async (id, name, photo = "") => {
  const uri = `${config.api.base_uri}/user/login`;
  try {
    const res = await axios.post(uri, {
      id,
      name,
      photo,
    });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const login = async (id) => {
  const uri = `${config.api.base_uri}/user/login`;
  try {
    const res = await axios.post(uri, {
      id,
    });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const fetchUser = async (id) => {
  const uri = `${config.api.base_uri}/user/find/${id}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const isActive = async (id) => {
  const uri = `${config.api.base_uri}/user/active/${id}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const isInactive = async (id) => {
  const uri = `${config.api.base_uri}/user/inactive/${id}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
