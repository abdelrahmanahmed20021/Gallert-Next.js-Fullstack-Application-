export const endPoints = () => {
  const env = process.env.NODE_ENV;
  if (env == "development") {
    return {
      domain:"http://localhost:3000"
    }
  }
  return {
    domain:"https://gallery-eta-five.vercel.app/"
  }
};
