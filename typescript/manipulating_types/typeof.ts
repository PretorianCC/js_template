namespace TypeOf {

  let strOrNum: string | number;
  if (Math.random() > 0.5) {
    strOrNum = 5;
  } else {
    strOrNum = 'str';
  }

  // сужение типов
  if (strOrNum === 'string') {
    console.log(strOrNum); // string
  } else {
    console.log(strOrNum); // number
  }

  // копирование типа
  let str20rNum: typeof strOrNum;
  const user = {
    name: 'Имя',
    age: 23
  }

  // типы из ключей объектов
  type keyOfUser = keyof typeof user;

  enum Direction {
    Up,
    Down
  }

  // типы перечислений
  type direct = keyof typeof Direction;
}