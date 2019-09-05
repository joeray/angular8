import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

import { DataShowComponent } from './data-show.component';
import { ReposModule } from './repos/repos.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OrgsModule } from './orgs/orgs.module';

@NgModule({
  declarations: [
    DataShowComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReposModule,
    OrgsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    RouterModule
  ]
})
export class DataShowModule { }
