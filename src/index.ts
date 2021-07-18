import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([4, -3, 11, 2, -5, -20, 8, 15]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
