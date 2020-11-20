import {ICountry} from './country.interface';

export interface IState {
    code: string;
    name: string;
    country: ICountry;
}
