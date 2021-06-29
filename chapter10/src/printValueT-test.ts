import {printValueT, IValuable} from "./printValueT";
import {Valuable} from './Valuable';
import {printValue} from "./printValue";

printValueT(new Valuable(1));
printValueT({value: true});