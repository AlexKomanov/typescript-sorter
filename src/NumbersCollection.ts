import { Sortable, Sorter } from './Sorter';
export class NumbersCollection extends Sorter implements Sortable{
  /**
   * @description: Fast initializtion of field and constructor
   */
  constructor(public data: number[]) {
    super();
  }

  get collectionLength(): number{
      return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
