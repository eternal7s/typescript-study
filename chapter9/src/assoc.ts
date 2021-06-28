import * as R from 'ramda';
import {IPerson, makeRandomIPerson} from "./model/person";

const getName = R.pipe(R.prop('name'), R.tap(name => console.log(name)));

const person: IPerson = makeRandomIPerson();
const originlName = getName(person);

const modifedPerson = R.assoc('name', 'Albert Einstein')(person);
const modifiedName = getName(modifedPerson);
console.log(originlName, modifiedName);