import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([4, -5, -20, 8, 15]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZxYmCBa');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(600);
linkedList.add(200);
linkedList.add(-300);
linkedList.add(-600);
linkedList.add(1600);
linkedList.sort();
linkedList.print();
