namespace RestrictionGeneric {

  // Ограничение типа.
  function getValue<
    T extends object, // объект
    U extends keyof T // ключ объекта
    >(obj: T, prop: U) {
    return obj[prop];
  }

  const r1 = getValue({name: 'exsample', age: 1000}, 'name');

  function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(k => obj[k] === value);
    return key || null;
  }

  const key = getKey({name: 'exsample', age: 1000}, 'name');
  
  function patchField<
    T extends object, // оьъект
    U extends keyof T,// ключ объекта
    V extends T[U]    // значение ключа объекта
    >(obj: T, field: U, val: V): T[U] {
      return obj[field] = val; 
    }

    const r2 = patchField({f: 1}, 'f', 5);
}
