import { SearchComponent } from './search.component';
import { Routes, RouterModule } from '@angular/router';
import {MovieInfoComponent} from './movieinfo/movie-info.component';

const routes: Routes = [
    {
        path: '', component: SearchComponent,
        data: {
            meta: {
                title: 'Search title',
                override: true,
                description: 'Search description'
            }
        }
    },
    {
        path: ':id', component: MovieInfoComponent,
        data: {
            meta: {
                title: 'Search title',
                override: true,
                description: 'Search description'
            }
        },
    }
];

export const SearchRoutes = RouterModule.forChild(routes);
