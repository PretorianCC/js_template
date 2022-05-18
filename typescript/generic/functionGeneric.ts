namespace functionGeneric {

  function identity<T>(arg: T): T {
    return arg;
  }

  const s: string = 'Exsample';
  const n: number = 10;

  const r1 = identity(s);
  const r2 = identity(n);

}