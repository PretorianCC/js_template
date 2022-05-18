interface Number {
  toArray(): Array<number>;
}

Number.prototype.toArray = () => {
  const arr: Array<number> = [];
  if (valueArr > 0) {
    for (let i: number = 0; i < valueArr; i++ ) {
      arr.push(i);
    }
  }else {
    for (let i: number = 0; i > valueArr; i-- ) {
      arr.push(i);
    }    
  }
  return arr;
}


const valueArr: Number = 10;
console.log(valueArr.toArray())
