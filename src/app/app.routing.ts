import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'search', loadChildren: './search/search.module#SearchModule' },
      { path: 'collection', loadChildren: './collection/collection.module#CollectionModule' },
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
    ]
  }
];
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
