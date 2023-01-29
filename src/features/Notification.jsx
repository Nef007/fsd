import { useStore } from "effector-react";
import { $notification } from "entities/contact";
import { useEffect } from "react";
import Notifi, { notify } from "shared/ui/Notification";

export const Notification = () => {
  let notification = useStore($notification);

  useEffect(() => {
    if (notification.text) {
      notify(notification);
    }
  }, [notification]);

  return <Notifi options={{ position: "top", autohide: false }} />;
};
