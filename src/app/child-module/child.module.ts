import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetestComponent} from './letest/letest.component';
import {RouterModule} from '@angular/router';
import {routeConfigChild} from './RouterChildConfig';
import { LechildComponent } from './letest/lechild/lechild.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfigChild)
  ],
  declarations: [
    LetestComponent,
    LechildComponent
  ]
})
export class ChildModule { }
