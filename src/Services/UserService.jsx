
import axios from "axios";

export const login = async (obj) => {
  let response = await axios.post(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
    obj
  );
  return response;
};

export const signup = async (obj) => {
    let response = await axios.post(
      "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",
      obj
    );
    return response;
  };