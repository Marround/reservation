import {Movie} from '../../shared-components/interfaces/movie.interface';

export interface SearchMovie {
    Error: string;
    Response: string;
    totalResults: number;
    Search: Movie[];
}
