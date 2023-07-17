export const Env = () => {
  let apiUrl = "https://myfac8ry.com/fac8ry/";
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:4000/"
  }
  return apiUrl;
};
