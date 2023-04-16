function NotificationsHeader(props: { count: number, onMarkAsRead: () => void }) {
  return (
    <header className="font-bold flex text-xl">
      <h1 className="text-vd-blue">Notifications</h1>
      <span className="bg-blue text-white pl-3 pr-3 rounded-lg text-base ml-2">
        {props.count}
      </span>
      <span onClick={props.onMarkAsRead} className="ml-auto font-normal text-grayish-blue text-sm leading-tight mt-auto my-auto">
        Mark all as read
      </span>
    </header>
  );
}
export default NotificationsHeader;
