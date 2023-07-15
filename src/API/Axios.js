import axios from "axios"
import {Env}  from "../API/Env"

let apiUrl = Env()

export const AxiosCall = async (method, route, payload) => {
  let config = {
    method: method,
    url: `${apiUrl}${route}`,
    headers: { "Content-Type": "application/json" },
    data: payload,
  };

  let data = null;
  console.log(config);
  try {
    let response = await axios(config);
    data = response.data;
  } catch (error) {
    console.error(error);
  }
  return data;
};


export const userEnquiry = async (payload, userId) => {
    const config = {
      method: "post",
      url: `${apiUrl}enquiry`,
      headers: { "Contetnt-Type": "multipart/form-data", userId },
      data:payload
    };

  let data = null;
  try {
    let response = await axios(config);
    data = response.data;
  } catch (error) {
    console.error(error);
  }
  return data;

};
