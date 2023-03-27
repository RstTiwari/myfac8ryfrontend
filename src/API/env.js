let prod = true

export const env = ()=>{
    let url = ""
    if(prod){
       url = "http://161.35.22.107:4000/";
    }else{
        url = "http://localhost:4000/";
    }
    return url
}