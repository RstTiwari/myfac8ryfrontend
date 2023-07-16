export const Env = () => {
  let apiUrl = "https://myfac8ry.com:4000/api/";
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:4000/api/";
  }
  return apiUrl;
};
