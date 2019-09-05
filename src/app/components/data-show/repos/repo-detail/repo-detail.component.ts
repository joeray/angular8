import { Component, OnChanges, Input } from '@angular/core';

import { Repo } from '../../../../models/repo';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.sass']
})
export class RepoDetailComponent implements OnChanges {
  @Input() repo: Repo;

  ngOnChanges() {
    this.repo;
  }
}
