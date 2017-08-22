import {Routes} from '@angular/router';
import {ChildrenComponent} from './children/children.component';
import {DetailsComponent} from './children/details/details.component';
import {EditComponent} from './children/details/edit/edit.component';
import {AlponchoComponent} from './children/details/edit/alponcho/alponcho.component';

export const routeConfig: Routes = [
  {
    path: 'children',
    component: ChildrenComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
        children: [
          {
            path: 'edit',
            component: EditComponent,
            children: [
              {
                path: 'alponcho',
                component: AlponchoComponent
              }
            ]
          }
        ]
      }
    ]
  }
];
