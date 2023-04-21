import { useState } from "react";
import NotificationsHeader from "./components/notificationsHeader/notificationsHeader";
import { parseData } from "./util/notificationParser";

function App() {
  let notifications = parseData()


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
    <div className="max-w-3xl p-4 mx-auto bg-white rounded-md shadow-md max-sm:min-h-screen sm:mt-20">
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
