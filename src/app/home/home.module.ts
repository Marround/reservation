import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {HomeRoutes} from './home.routing';
import {HomeComponent} from './home.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutes,
        TranslateModule.forChild(),
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
