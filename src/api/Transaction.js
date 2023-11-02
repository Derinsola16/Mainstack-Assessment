import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const getUserDetails = async () => {
  try {
    const res = await instance.get("/user");
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getWalletDetails = async () => {
  try {
    const res = await instance.get("/wallet");
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getTransactionDetails = async () => {
  try {
    const res = await instance.get("/transactions");
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getUserDetails, getWalletDetails, getTransactionDetails };
