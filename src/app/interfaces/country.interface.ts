import {IContinent} from './continent.interface';
import {ILanguage} from './language.interface';
import {IState} from './state.interface';

export interface ICountry{
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: IContinent;
    capital: string;
    currency: string;
    languages: ILanguage[];
    emoji: string;
    emojiU: string;
    states: IState[];
}
