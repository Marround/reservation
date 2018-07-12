import {CollectionComponent} from './collection.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '', component: CollectionComponent,
        data: {
            meta: {
                title: 'Search title',
                override: true,
                description: 'Search description'
            }
        }
    }
];

export const CollectionRoutes = RouterModule.forChild(routes);
