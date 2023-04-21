function NotificationsHeader(props: { count: number, onMarkAsRead: () => void, className: string }) {
  return (
    <header className={'font-bold flex text-xl ' + props.className }>
      <h1 className="text-vd-blue">Notifications</h1>
      <span className="pl-3 pr-3 ml-2 text-base text-white rounded-lg bg-blue">
        {props.count}
      </span>
      <span onClick={props.onMarkAsRead} className="my-auto mt-auto ml-auto text-sm font-normal leading-tight cursor-pointer text-grayish-blue hover:text-blue">
        Mark all as read
      </span>
    </header>
  );
}
export default NotificationsHeader;
