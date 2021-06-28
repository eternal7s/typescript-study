import {ILocation} from "./ILocation";
import {makeILoaction} from "./makeILoaction";
import {makeRandomICoordinates} from "../coordinates";
import Chance from 'chance';
const c = new Chance

export const makeRandomILocation = (): ILocation =>
    makeILoaction(c.country(), c.city(), c.address(), makeRandomICoordinates());