import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    //Initialization by calling the parameter and storing as field with the same name
    const { collectionLength } = this.collection;

    for (let i = 0; i < collectionLength; i++) {
      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
