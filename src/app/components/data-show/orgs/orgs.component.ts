import { Component, OnChanges, Input } from '@angular/core';
import { Org } from '../../../models/org';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.sass']
})
export class OrgsComponent implements OnChanges {
  @Input() orgs: Array<Org>;
  orgSelected: Org;
  ngOnChanges() {
    this.orgs;
  }
  getSelected($event: Org) {
    this.orgSelected = $event;
  }
}
