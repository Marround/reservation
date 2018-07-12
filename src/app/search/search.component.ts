import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SearchService} from './providers/search.service';
import {Movie} from './interfaces/movie.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('paginatorII') paginatorII: MatPaginator;
    movieList: Movie[];
    movieListLocal: Movie[];
    displayedColumns = ['buttons', 'Poster', 'Title', 'Year', 'Type'];
    dataSource: MatTableDataSource<Movie>;
    dataSourceLocal: MatTableDataSource<Movie>;

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        fromEvent(this.searchInput.nativeElement, 'keydown').pipe(
            map(() => this.searchInput.nativeElement.value)
        ).subscribe(val => {
            this.searchService.getMovies(val).subscribe(res => {
                if (res.Response === 'True') {
                    this.movieList = res.Search;
                    this.dataSource = new MatTableDataSource<Movie>(res.Search);
                    this.dataSource.paginator = this.paginator;

                    // if (Number(res.totalResults) > 10) {
                    //     const paginate = Math.ceil(Number(res.totalResults) / 10);
                    //     this.searchService.getAllMovies(val, paginate);
                    // }
                }

            });
        });

        if (localStorage.getItem('saved-movies')) {
            this.movieListLocal = JSON.parse(localStorage.getItem('saved-movies'));
            this.dataSourceLocal = new MatTableDataSource<Movie>(this.movieListLocal);
            this.dataSourceLocal.paginator = this.paginatorII;
        }
    }
}
