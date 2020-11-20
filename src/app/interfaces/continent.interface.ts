import {ICountry} from './country.interface';

export interface IContinent {
    name: string;
    code: string;
    countries: ICountry[];
}
