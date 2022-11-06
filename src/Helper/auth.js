const axios = require("axios")
export const isAuthenticated = async ()=>{
    const config = {
      method: "post",
      url: "http://localhost:4000/api/isauthenticated",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({}),

    };

    try {
        const {data}  =  await axios(config)
        return data
        
    } catch (error) {
        console.log(error.message)
    }
}
