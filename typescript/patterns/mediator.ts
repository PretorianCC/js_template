namespace Mediator {

  interface Mediator {
    notify(sender: string, event: string): void;
  }

  abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator) {
      this.mediator = mediator;
    }
  }

  class Notifications {
    send() {
      console.log('Отправляю уведомление');
    }
  }

  class Log {
    log(message: string): void {
      console.log(message);
    }
  }

  class EventHandler extends Mediated{
    myEvent() {
      this.mediator.notify('EventHandler', 'myEvent');
    }
  }

  // Бизнес логика в этом медиаторе
  class NotificationMediator implements Mediator {
    constructor(
      public notifications: Notifications,
      public logger: Log,
      public handler: EventHandler
    ) {}
    notify(sender: string, event: string): void {
      switch(event) {
        case 'myEvent':
          this.notifications.send();
          this.logger.log('Отправлено');
          break;
      }
    }

  }

  const handler = new EventHandler();
  const logger = new Log();
  const notifications = new Notifications();

  const m = new NotificationMediator(notifications, logger, handler);
  handler.setMediator(m);
  handler.myEvent();
}