namespace typesFunction {

  let a: number = 4             // число
  let b: string = 'string'      // строка
  let c: boolean = true         // булеан
  
  const d: string[] = ['str1', 'str2']  // массив строк
  let e: any = 5                // любой тип
  let f: undefined = undefined  // нет значения
  let i: null = null            // переменной не существует
  
  // возвращает значение одого типа
  function test1(a: string): string {
    return ''
  }
  
  // возвращает значение разных типов
  function test2(a: string): number | string {
    return ''
  }
  
  // стрелочная функция
  const test3 = (a: number): number => {
    return a * 2
  }
  
  // типизация объекта и не обязательный параметр в объекте
  function countCoord(coord: {lat: number, long?: number}) {
  
  }
  
  // функция ничего не возвращает
  function test4(a: number): void {
    return
  }
  
  // юнит тип
  function printIt(id: number | string) {
    if (typeof id === 'number') {
      console.log(id.toString())
    } else if (typeof id === 'string') {
      id.toUpperCase()
    }
  }
  
  function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
  
    }
  }
  
}