namespace AssociationsGegeric {

  function merge<U, V>(o1: U, o2: V): U & V {
    return {
      ...o1,
      ...o2
    }
  }

  const r1 = merge({a: 1}, {b: 2});
  const r2 = merge({a: 1, c: 'exsample'}, {b: 2});

}