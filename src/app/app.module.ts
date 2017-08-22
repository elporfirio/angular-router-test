import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import {RouterModule} from '@angular/router';
import {routeConfig} from './RouterConfig';
import { ChildrenComponent } from './children/children.component';
import { DetailsComponent } from './children/details/details.component';
import { EditComponent } from './children/details/edit/edit.component';
import {ChildModule} from './child/child.module';
import { AlponchoComponent } from './children/details/edit/alponcho/alponcho.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    DetailsComponent,
    EditComponent,
    AlponchoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
