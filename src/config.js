const config = {
    development: {
        API_BASE_URL: "http://localhost:8000",
    },
    production: {
        API_BASE_URL: "http://moodtracker-api-load-balanacer-129190309.us-west-1.elb.amazonaws.com",
    }
};

const ENV = process.env.NODE_ENV;

// default to development if NODE_ENV not set
export const API_BASE_URL = config[ENV]?.API_BASE_URL || config.development.API_BASE_URL;
  