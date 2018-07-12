import {Movie} from './movie.interface';

export interface SearchMovie {
    Error: string;
    Response: string;
    totalResults: number;
    Search: Movie[];
}
