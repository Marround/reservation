import {Component, OnInit} from '@angular/core';
import {Movie} from '../shared-components/interfaces/movie.interface';

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html'
})
export class CollectionComponent implements OnInit {
    movieList: Movie[] = [];
    constructor() {}

    ngOnInit() {
        this.movieList = localStorage.getItem('movie-list') ? JSON.parse(localStorage.getItem('movie-list')) : [];
    }
}
