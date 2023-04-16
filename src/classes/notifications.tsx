import classNames from "classnames";
export enum NotificationType {
  BASE,
  FOLLOW,
  GROUP,
  PM,
  PICTURE,
}
export enum GroupNotificationAction {
  JOIN,
  LEAVE,
}
export class BaseNotification {
  id: string;
  constructor(
    public authorImage: string,
    public authorName: string,
    public createdAt: string,
    public read: boolean,
    public notificationType: NotificationType
  ) {
    this.id = Math.random().toString();
  }

  protected renderName() {
    return <span className="font-bold text-vd-blue">{this.authorName}</span>;
  }
  protected renderDate() {
    return <div className="text-grayish-blue">{this.createdAt}</div>;
  }
  protected renderSeenBubble() {
    if (this.read) return;
    return <div className="inline-block ml-1 rounded-full h-2 w-2 bg-red" />;
  }
  protected contentScaffold(innerContent: JSX.Element) {
    return (
      <div
        className={classNames(
          "flex text-sm p-3 rounded-md text-d-grayish-blue",
          {
            "bg-vl-grayish-blue": !this.read,
          }
        )}
      >
        <img src={this.authorImage} className="h-10 pr-1" />
        {innerContent}
      </div>
    );
  }
  renderContent() {
    return this.contentScaffold(this.innerContent());
  }

  protected innerContent() {
    return (
      <div>
        {this.renderName()} followed you {this.renderSeenBubble()}
        {this.renderDate()}
      </div>
    );
  }
}

export class ReactNotification extends BaseNotification {
  constructor(
    public authorImage: string,
    public authorName: string,
    public createdAt: string,
    public read: boolean,
    public notificationType: NotificationType,
    public reactTarget: string
  ) {
    super(authorImage, authorName, createdAt, read, notificationType);
  }

  private renderReactTarget() {
    return <div className="inline font-bold">{this.reactTarget}</div>;
  }
  protected innerContent(): JSX.Element {
    return (
      <div>
        {this.renderName()} reacted to your recent post{" "}
        {this.renderReactTarget()} {this.renderSeenBubble()}
        {this.renderDate()}
      </div>
    );
  }
}

export class GroupNotification extends BaseNotification {
  private notificationText: string;
  constructor(
    public authorImage: string,
    public authorName: string,
    public createdAt: string,
    public read: boolean,
    public notificationType: NotificationType,
    public groupAction: GroupNotificationAction,
    public groupName: string
  ) {
    super(authorImage, authorName, createdAt, read, notificationType);
    if (groupAction === GroupNotificationAction.JOIN)
      this.notificationText = "has joined your group";
    else this.notificationText = "left the group";
  }

  private renderGroupText() {
    return (
      <span>
        {this.notificationText}
        <b className="pl-1 font-bold text-blue">{this.groupName}</b>
      </span>
    );
  }
  protected innerContent(): JSX.Element {
    return (
      <div>
        {this.renderName()} {this.renderGroupText()} {this.renderSeenBubble()}
        {this.renderDate()}
      </div>
    );
  }
}

export class PmNotification extends BaseNotification {
  constructor(
    public authorImage: string,
    public authorName: string,
    public createdAt: string,
    public read: boolean,
    public notificationType: NotificationType,
    public receivedMessage: string
  ) {
    super(authorImage, authorName, createdAt, read, notificationType);
  }

  protected innerContent(): JSX.Element {
    return (
      <div>
        {this.renderName()} sent you a private message {this.renderSeenBubble()}
        {this.renderDate()}
        <div className="mt-2 border-l-grayish-blue-2 rounded-md p-3 border">
          {this.receivedMessage}
        </div>
      </div>
    );
  }
}

export class LikeNotification extends BaseNotification {
  constructor(
    public authorImage: string,
    public authorName: string,
    public createdAt: string,
    public read: boolean,
    public notificationType: NotificationType,
    public pictureUrl: string
  ) {
    super(authorImage, authorName, createdAt, read, notificationType);
  }

  protected innerContent(): JSX.Element {
    return (
      <div className="w-full">
        <div className="flex">
          <div className="inline">
            {this.renderName()} commented on your picture{" "}
            {this.renderSeenBubble()}
            {this.renderDate()}
          </div>
          <img src={this.pictureUrl} className="h-10 ml-auto" />
        </div>
      </div>
    );
  }
}
