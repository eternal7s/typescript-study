import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from "./model/person";
import {displayPerson} from "./displayPerson";

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortBy(R.prop('name'))(persons);
const ageSortedPersons = R.sortBy(R.prop('age'))(persons);

displayPerson('sorted by name: ')(nameSortedPersons);
displayPerson('sorted by age: ')(ageSortedPersons);