import { Component, OnChanges, Input } from '@angular/core';
import { Repo } from '../../../models/repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.sass']
})
export class ReposComponent implements OnChanges {
  @Input() repos: Array<Repo>;
  repoSelected: Repo;
  ngOnChanges() {
    this.repos;
  }
  getSelected($event: Repo) {
    this.repoSelected = $event;
  }
}
