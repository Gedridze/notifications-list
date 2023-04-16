import { useState } from "react";
import NotificationsHeader from "./components/notificationsHeader/notificationsHeader";
import {
  BaseNotification,
  GroupNotification,
  GroupNotificationAction,
  LikeNotification,
  NotificationType,
  PmNotification,
  ReactNotification,
} from "./classes/notifications";

function App() {
  const [count, setCount] = useState(0);
  let notifications: BaseNotification[] = [];
  notifications.push(
    new BaseNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      NotificationType.BASE
    )
  );
  notifications.push(
    new ReactNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      NotificationType.BASE,
      "My first tournament today!"
    )
  );
  notifications.push(
    new GroupNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      false,
      NotificationType.GROUP,
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
      NotificationType.GROUP,
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    )
  );

  notifications.push(
    new LikeNotification(
      "public/assets/images/avatar-angela-gray.webp",
      "Angela Gray",
      "5m ago",
      true,
      NotificationType.PICTURE,
      "public/assets/images/image-chess.webp"
    )
  );

  const [notificationList, setNotifications] = useState(notifications);

  function markAllAsRead() {
    const notifications = [...notificationList];
    notifications.forEach((notif) => {
      notif.read = true;
    });
    setNotifications(notifications)
  }

  function markAsRead(id: string) {
    const notifications = [...notificationList]
    notifications.forEach(notification => {
      if (notification.id === id) {
        notification.read = true
      }
    })
    console.log('READ')
    setNotifications(notifications)
  }
  return (
    <div className="p-4">
      {notificationList[0]!.read}
      <NotificationsHeader count={5} onMarkAsRead={markAllAsRead} />
      {notificationList.map((notification) => (
        <div className="mb-3" key={notification.id} onClick={() => markAsRead(notification.id)}>
          {notification.renderContent()}
        </div>
      ))}
    </div>
  );
}

export default App;
