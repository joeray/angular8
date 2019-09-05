import { Component, Input, Output, OnChanges, EventEmitter, ViewChild } from '@angular/core';
import { Org } from '../../../../models/org'
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.sass']
})
export class OrgListComponent implements OnChanges {

  @Input() orgs: Array<Org>;
  @Output() orgSelected = new EventEmitter<Org>();
  selectedId: number = null;
  displayedColumns: string[] = ['id', 'login'];
  dataSource: MatTableDataSource<Org>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnChanges() {
    this.orgs;
    if (this.orgs) {
      this.dataSource = new MatTableDataSource<Org>(this.orgs);
      this.dataSource.paginator = this.paginator;
    }
  }

  gotoOrg(org: Org) {
    this.orgSelected.emit(org)
  }
}
