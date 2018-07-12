import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';
import {MovieListComponent} from './movie-list/movie-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [MovieListComponent],
    exports: [MovieListComponent]
})
export class ScModule {}
