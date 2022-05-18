namespace Newer {

  // Генерация ошибки
  function generateError(message: string): never {
    throw new Error(message);
  }

  // Бесконечный цикл
  function dumpError(): never {
    while (true) {}
  }

  // Бесконечная рекурсия
  function rec(): never {
    return rec();
  }


  // Проверка сужением типов
  type paymentAction = 'refund' | 'checkout' | 'reject';

  function processAction(action: paymentAction) {
    switch (action) {
      case 'refund':
        // ...
        break;
      case 'checkout':
        // ...
        break;
      default:
        const _: never = action; // будет подчеркнута переменная из за сужения типов если в paymentAction появился не обрабатываемый action
        throw Error('Нет такого action');
    }
  }

  // В рантайме может быть не string и не number, по этому ограничим never-ом
  function isString(x: string | number): boolean {
    if (typeof x === 'string') {
      return true;
    } if (typeof x === 'number') {
      return false;
    }
    generateError('Ошибка');
  }

}