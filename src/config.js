const config = {
    development: {
      API_BASE_URL: "http://localhost:8000",
    },
    production: {
      API_BASE_URL: "https://api.example.com",
    }
  };
  
  const ENV = process.env.NODE_ENV;
  
  // default to developmentif NODE_ENV not set
  export const API_BASE_URL = config[ENV]?.API_BASE_URL || config.development.API_BASE_URL;
  