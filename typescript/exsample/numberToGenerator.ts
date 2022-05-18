interface Number {
  generator(): Generator<number>;
}

Number.prototype.generator = function* (): Generator<number> {
  let counter = 0;
  while (counter < valueGen) {
    yield counter++;
  }
}

const valueGen: Number = 10;

const iteratorGen = valueGen.generator();
let currGen = iteratorGen.next();
while (!currGen.done) {
  console.log(currGen.value);
  currGen = iteratorGen.next();
}