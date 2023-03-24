import axios from "axios"
import { env } from "./env.js";
let url = env()

export const  signinUser = async (payload)=>{
    try {
        const config = {
          url: `${url}signin`,
          method: "post",
          data: payload,
          headers: {
            "Content-Type ": "application/json",
          },
        };
        
        let response = await axios(config);
        return response
        
    } catch (error) {
        console.error(error)
    }

}
export const signupUser = async (payload) => {
  try {
    const config = {
      url: `${url}signup`,
      method: "post",
      data: payload,
      headers: {
        "Content-Type ": "application/json",
      },
    };

    let response = await  axios(config);
    return response
    
  } catch (error) {
    console.error(error)
  }
};

export const userEnquiry = async (data)=>{
  try {
       const config = {
         method: "post",
         url: `${url}enquiry`,
         headers: { "Contetnt-Type": "multipart/form-data" },
         data: data,
       };

      let response = await axios(config)
      console.log(response)
  } catch (error) {
    
  }
}