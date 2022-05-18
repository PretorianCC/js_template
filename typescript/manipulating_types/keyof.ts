namespace KeyOf {

  interface IUser {
    name: string;
    age: number;
  }

  // Получает все ключи интерфейса
  type KeysOfUser = keyof IUser;

  function getValue<T>(obj: T, key: keyof T) {
    return obj[key];
  }

  function getValue2<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const user: IUser = {
    name: 'Саха',
    age: 23
  }

  const nameUser = getValue(user, 'name');
  const ageUser = getValue2(user, 'age');
  console.log(nameUser, ageUser);

}