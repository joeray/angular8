import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatDividerModule, MatListModule } from '@angular/material';

import { OrgsComponent } from './orgs.component';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
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
    OrgsComponent,
    OrgListComponent,
    OrgDetailComponent
  ],
  exports: [
    OrgsComponent
  ]
})
export class OrgsModule { }
