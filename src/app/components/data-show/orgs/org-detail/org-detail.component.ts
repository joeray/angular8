import { Component, OnChanges, Input } from '@angular/core';
import { Org } from '../../../../models/org';

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.sass']
})
export class OrgDetailComponent implements OnChanges {
  @Input() org: Org;

  ngOnChanges() {
    this.org;
  }
}
