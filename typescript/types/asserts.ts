namespace Asserts {

  // Получает сведения о типе значения, о котором TypeScript не может знать.
  interface User {
    name: string;
  }

  const a = {};

  assertUser(a);
  a.name = 'Том';

  // Проверяет, что тип User
  function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
      return;
    }
    throw new Error('Это не пользователь.')
  }
}