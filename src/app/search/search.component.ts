import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SearchService} from './providers/search.service';
import {Movie} from '../shared-components/interfaces/movie.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    @ViewChild('searchInput') searchInput: ElementRef;
    movieList: Movie[];

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        fromEvent(this.searchInput.nativeElement, 'keydown').pipe(
            map(() => this.searchInput.nativeElement.value)
        ).subscribe(val => {
            this.searchService.getMovies(val).subscribe(res => {
                if (res.Response === 'True') {
                    this.movieList = res.Search;
                }

            });
        });
    }
}
