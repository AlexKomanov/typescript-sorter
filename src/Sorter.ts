export interface Sortable {
    collectionLength: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract collectionLength: number;

  sort(): void {
    //Initialization by calling the parameter and storing as field with the same name
    const { collectionLength } = this;

    for (let i = 0; i < collectionLength; i++) {
      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
