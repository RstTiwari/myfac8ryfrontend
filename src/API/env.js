let prod = true

export const env = ()=>{
    let url = ""
    if(prod){
       url = "http://170.64.178.125/api/";
    }else{
        url = "http://localhost:4000/";
    }
    return url
}