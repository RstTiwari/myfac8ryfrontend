let prod = true

export const env = ()=>{
    let url = ""
    if(prod){
       url = "http://83.229.39.227/";
    }else{
        url = "http://localhost:4000/";
    }
    return url
}