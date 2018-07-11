import { api } from '../util';

export const fetchLeagues = async state => await api('leagues', state);
