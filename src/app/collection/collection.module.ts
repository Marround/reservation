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
import {CollectionComponent} from './collection.component';
import {CollectionRoutes} from './collection.routing';
import {ScModule} from '../shared-components/sc.module';

@NgModule({
    imports: [
        CommonModule,
        CollectionRoutes,
        TranslateModule.forChild(),
        ScModule,
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
    declarations: [CollectionComponent]
})
export class CollectionModule {
}
