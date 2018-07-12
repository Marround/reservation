import {Injectable} from '@angular/core';
import {TransferHttpService} from '@shared/transfer-http';
import {map, tap} from 'rxjs/operators';
import {SearchMovie} from '../interfaces/search.interface';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Movie} from '../../shared-components/interfaces/movie.interface';

@Injectable()
export class SearchService {
    public movieList: BehaviorSubject<Movie> = new BehaviorSubject<Movie>(null);
    constructor(private http: TransferHttpService) {}
    getMovies(name, page?) {
        page = page || 1;
        return this.http.get('http://www.omdbapi.com/?apikey=87099872&r=json&page=' + page + '&s=' + name).pipe(
            map((res: SearchMovie) => res)
        );
    }

    getAllMovies(name, count) {
        const array = [];
        for (let i = 1; i <= count; i++) {
            this.getMovies(name, i);
        }

        // not work
        // return from(array).pipe(
        //     concatMap(this.getMovies)
        // );
    }

    getMovieFull(id) {
        return this.http.get('http://www.omdbapi.com/?apikey=87099872&plot=full&i=' + id).pipe(
            map((res: any) => res)
        );
    }
}
