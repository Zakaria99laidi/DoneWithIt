import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";
import logger from "../utility/logger";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default useNotification = () => {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    requestForPushNotifications();

    notificationListener.current =
      Notifications.addNotificationReceivedListener();

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener();

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const requestForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } catch (error) {
      logger.log(error);
    }
  };
};
