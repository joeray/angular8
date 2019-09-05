import { Component, OnChanges, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnChanges {
  @Input() user: User = { id: null, name: '', avatar_url: '',
  bio: '', url: '',  email: '', followers: null, following: null};

  ngOnChanges() {
    this.user;
  }
}
