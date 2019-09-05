import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { MatCardModule } from '@angular/material/card';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user props with proper items', () => {
    component.user = { id: 1234, name: 'fake_user', avatar_url: 'http://fake_avatar_url',
    bio: 'fake_bio', url: 'http://fake_url',  email: 'fake_email', followers: 3, following: 6};
    component.ngOnChanges();
    fixture.detectChanges();
    const cardUserElements = fixture.nativeElement.querySelectorAll('mat-card-subtitle');
    const cardUserImg = fixture.nativeElement.querySelector('.user-header-image').style['backgroundImage'];

    expect(cardUserElements[0].innerText).toEqual('fake_bio');
    expect(cardUserElements[1].innerText).toEqual('http://fake_url');
    expect(cardUserElements[2].innerText).toEqual('Mail:fake_email');
    expect(cardUserElements[3].innerText).toEqual('Followers:3');
    expect(cardUserElements[4].innerText).toEqual('Following:6');
    expect(cardUserImg).toEqual(`url("${component.user.avatar_url}")`)
  });
});
