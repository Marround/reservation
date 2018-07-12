import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../providers/search.service';

@Component({
    selector: 'app-movie-info',
    templateUrl: './movie-info.component.html'
})
export class MovieInfoComponent implements OnInit {
    link: string;
    movie: any;
    constructor(private activateRoute: ActivatedRoute,
                private searchService: SearchService) {
        this.link = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.searchService.getMovieFull(this.link).subscribe(movie => {
            console.log(movie);
            this.movie = movie;
        });
    }
}
