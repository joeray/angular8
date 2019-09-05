import { Component, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Repo } from '../../../../models/repo';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.sass']
})
export class RepoListComponent implements OnChanges {
  @Input() repos: Array<Repo>;
  @Output() repoSelected = new EventEmitter<Repo>();
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Repo>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnChanges() {
    this.repos;
    if (this.repos) {
      this.dataSource = new MatTableDataSource<Repo>(this.repos);
      this.dataSource.paginator = this.paginator;
    }
  }

  gotoRepo(repo: Repo) {
    this.repoSelected.emit(repo)
  }
}
