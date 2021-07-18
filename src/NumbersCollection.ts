import { Sortable } from './Sorter';
export class NumbersCollection implements Sortable{
  /**
   * @description: Fast initializtion of field and constructor
   */
  constructor(public data: number[]) {}

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
