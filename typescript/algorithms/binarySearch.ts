abstract class BinarySearch<T> {
  constructor(private readonly list: T[]) {};
  abstract cmp(item1: T, item2: T): number;
  /**
   * Бинарный поиск в отсортированном массиве.
   * @param list массив объектов.
   * @param item объект поиска.
   * @returns найденный индекс или -1.
   */
  search(item: T): number {
    let low: number = 0;
    let high: number = this.list.length - 1;
    while (low <= high) {
      const mid: number = Math.floor((low + high) / 2);
      const guess: any = this.list[mid];
      if (this.cmp(guess, item) === 0) return mid;// ===
      if (this.cmp(guess, item) === -1) high = mid - 1; // >
      else low = mid + 1;
    }
    return -1;  
  }
}

class BinarySearchNumber extends BinarySearch<number> {
  cmp(item1: number, item2: number): number {
    if (item1 > item2) return -1;
    else if (item1 < item2) return 1;
    else return 0;  
  }
}

const list: number[] = [];
for (let i: number = 0; i < 101; i++) list.push(i);

const search = new BinarySearchNumber(list);
const result = search.search(23);
console.log(result);


