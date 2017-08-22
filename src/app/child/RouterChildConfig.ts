import {Routes} from '@angular/router';
import {LetestComponent} from './child/letest/letest.component';
import {LechildComponent} from './child/lechild/lechild.component';

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
