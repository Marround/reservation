import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchRoutes} from './search.routing';
import {SearchComponent} from './search.component';
import {SearchService} from './providers/search.service';
import {MovieInfoComponent} from './movieinfo/movie-info.component';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutes,
        TranslateModule.forChild(),
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [SearchComponent, MovieInfoComponent],
    providers: [
        SearchService
    ]
})
export class SearchModule {
}
