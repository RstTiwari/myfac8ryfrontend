export const Env = () => {
  let apiUrl = "https://147.182.141.127:4000/api/";
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:4000/api/";
  }
  return apiUrl;
};
