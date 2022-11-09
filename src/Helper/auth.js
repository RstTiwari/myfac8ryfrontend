
const isAuthenticated = async ()=>{
 try {
  let token = localStorage.getItem("token");
  if(token){
    let user = localStorage.getItem("user")
    return user
  }
 } catch (error) {
  console.log(error.message)
 }
}
export default  isAuthenticated