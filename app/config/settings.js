import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.34:9000/api",
  },
  staging: {
    //apiUrl: "http://192.168.1.42:9000/api",
    apiUrl: "https://done-with-it-heroku.herokuapp.com/api",
  },
  prod: {
    //apiUrl: "http://192.168.1.42:9000/api",
    apiUrl: "https://done-with-it-heroku.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
