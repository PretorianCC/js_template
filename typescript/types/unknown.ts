namespace Unknown {

  // Тип неизвестными по структуре данными (более строгий чем any)
  let input: unknown;
  input = 3;
  input = ['1', '2'];
  function run(i: unknown) {
    if (typeof i == 'number') {
      i++;
    } else {
      i;
    }
  }
  run(input);

  async function getData() {
    try {
      await fetch('');
    } catch (error) {
      if (error instanceof Error) { // нужно делать так
        console.log(error.message);
      }
    }   
  }

  async function getDataForce() {
    try {
      await fetch('');
    } catch (error) {
      if (error) {
        const e = error as Error; // не делать так, возможны ошибки
      }
    }   
  }

}