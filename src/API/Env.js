export const Env = () => {
  let apiUrl = "https://myfac8ryapi.vercel.app/";
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:4000/"
  }
  return apiUrl;
};
