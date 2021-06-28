import {ILocation} from "./ILocation";
import {ICoordinates, makeICoordinates} from "../coordinates";

export const makeILoaction = (
    country: string,
    city: string,
    address: string,
    coordinates: ICoordinates
): ILocation => ({country, city, address, coordinates});