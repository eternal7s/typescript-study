import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from "./model/person";
import {displayPerson} from "./displayPerson";

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortWith([R.descend(R.prop('name'))])(persons);

displayPerson('sorted by name: ')(nameSortedPersons);