import {EventEmitter} from 'events';

class Logger extends EventEmitter {
  log(message: string) {
    this.emit('message', `${message} ${Date.now()}`);
  }
}

const logger = new Logger();

logger.on('message', data => { // Срабатывает при emit('message')
  console.log(data);
})

logger.log('Событие');