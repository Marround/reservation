import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Movie} from '../interfaces/movie.interface';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnChanges, AfterViewInit {
    @Input() movieList: Movie[];
    @Input() flag: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['buttons', 'Poster', 'Title', 'Year', 'Type'];
    dataSource: MatTableDataSource<Movie>;
    movieListLocal: Movie[] = [];
    constructor() {}

    ngOnChanges() {
        this.ngAfterViewInit();
    }

    ngAfterViewInit() {
        this.dataSource = new MatTableDataSource<Movie>(this.movieList);
        this.dataSource.paginator = this.paginator;
    }

    choise(movie: Movie) {
        this.flag ? this.insertMovie(movie) : this.removeMovie(movie);
    }
    insertMovie(movie: Movie): void {
        this.movieListLocal = localStorage.getItem('movie-list') ? JSON.parse(localStorage.getItem('movie-list')) : [];
        this.movieListLocal.push(movie);
        localStorage.setItem('movie-list', JSON.stringify(this.movieListLocal));
    }

    removeMovie(movie: Movie) {
        this.movieListLocal = localStorage.getItem('movie-list') ? JSON.parse(localStorage.getItem('movie-list')) : [];
        this.movieListLocal = this.movieListLocal.filter(item => {
            return item.imdbID !== movie.imdbID;
        });
        if (this.movieListLocal.length) {
            localStorage.setItem('movie-list', JSON.stringify(this.movieListLocal));
        } else {
            localStorage.removeItem('movie-list');
        }
        this.movieList = this.movieListLocal;
        this.ngAfterViewInit();
    }
}
