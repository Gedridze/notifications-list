import { useState } from "react";
import NotificationsHeader from "./components/notificationsHeader/notificationsHeader";
import {
  BaseNotification,
  GroupNotification,
  GroupNotificationAction,
  LikeNotification,
  PmNotification,
  ReactNotification,
} from "./classes/notifications";

function App() {
  let notifications: BaseNotification[] = [];
  notifications.push(
    new BaseNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false
    )
  );
  notifications.push(
    new ReactNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      "My first tournament today!"
    )
  );
  notifications.push(
    new GroupNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      GroupNotificationAction.JOIN,
      "Chess Club"
    )
  );

  notifications.push(
    new PmNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    )
  );

  notifications.push(
    new LikeNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      true,
      "public/assets/images/image-chess.webp"
    )
  );

  const [notificationList, setNotifications] = useState(notifications);

  function markAllAsRead() {
    const notifications = [...notificationList];
    notifications.forEach((notif) => {
      notif.read = true;
    });
    setNotifications(notifications);
  }

  function markAsRead(id: string) {
    const notifications = [...notificationList];
    notifications.forEach((notification) => {
      if (notification.id === id) {
        notification.read = true;
      }
    });
    console.log("READ");
    setNotifications(notifications);
  }
  return (
    <div className="max-w-3xl p-4 mx-auto mt-20 bg-white rounded-md shadow-md">
      <NotificationsHeader
        className="mb-5"
        count={
          notificationList.filter((notification) => !notification.read).length
        }
        onMarkAsRead={markAllAsRead}
      />
      {notificationList.map((notification) => (
        <div
          className="mb-3"
          key={notification.id}
          onClick={() => markAsRead(notification.id)}
        >
          {notification.renderContent()}
        </div>
      ))}
    </div>
  );
}

export default App;
