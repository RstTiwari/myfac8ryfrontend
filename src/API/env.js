let prod = false

export const env = ()=>{
    let url = ""
    if(prod){
       url = "https://myfac8ryapi.vercel.app/api/";
    }else{
        url = "http://localhost:4000/api/";
    }
    console.log(url)
   return url
}

