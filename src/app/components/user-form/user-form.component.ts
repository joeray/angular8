import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent  {

  public model: User = { id: null, name: '', avatar_url: '',
  bio: '', url: '',  email: '', followers: null, following: null};

  constructor(
    private router: Router
  ) { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/user', this.model.name]);
  }
}