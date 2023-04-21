import { plainToClass } from "class-transformer";
import {
  BaseNotification,
  CommentNotification,
  GroupNotification,
  PmNotification,
  ReactNotification,
} from "../classes/notifications";
import data from "../data.json";

export function parseData() {
  const notifications: BaseNotification[] = [];
  data.notifications.forEach((notification) => {
    switch (notification.type) {
      case "base": {
        notifications.push(plainToClass(BaseNotification, notification));
        break;
      }
      case "react": {
        notifications.push(plainToClass(ReactNotification, notification));
        break;
      }
      case "group": {
        notifications.push(plainToClass(GroupNotification, notification));
        break;
      }
      case "pm": {
        notifications.push(plainToClass(PmNotification, notification));
        break;
      }
      case "comment": {
        notifications.push(plainToClass(CommentNotification, notification));
        break;
      }
    }
  });
  return notifications;
}
