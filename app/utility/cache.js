import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const itemSaved = dayjs(item.timestamp);
  return now.diff(itemSaved, "minute") > expiryInMinutes;
};

const get = async (key) => {
  try {
    const data = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(data);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    logger.log(error);
  }
};

export default {
  get,
  store,
};
