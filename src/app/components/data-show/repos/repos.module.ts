import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatDividerModule, MatListModule } from '@angular/material';

import { ReposComponent } from './repos.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [
    ReposComponent,
    RepoListComponent,
    RepoDetailComponent
  ],
  exports: [
    ReposComponent
  ]
})
export class ReposModule { }
