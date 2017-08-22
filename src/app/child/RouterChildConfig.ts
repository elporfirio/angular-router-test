import {Routes} from '@angular/router';
import {LetestComponent} from './letest/letest.component';
import {LechildComponent} from './letest/lechild/lechild.component';

export const routeConfigChild: Routes = [
  {
    path: 'parent-children',
    component: LetestComponent,
    children: [
      {
        path: 'detail',
        component: LechildComponent
      }
    ]
  }
];
