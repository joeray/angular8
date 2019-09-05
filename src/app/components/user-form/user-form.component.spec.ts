import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [RouterTestingModule, FormsModule, MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load form elements', () => {
    expect(fixture.nativeElement.querySelector('mat-card-title').innerText).toEqual('User Form');
    expect(fixture.nativeElement.querySelector('input#name')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('[type="submit"]').innerText).toEqual('Submit');
    expect(fixture.nativeElement.querySelector('.cleaner').innerText).toEqual('Clean data');
  });

  it('should navigate with proper params', () => {
    const navigation = spyOn(router, 'navigate');
    component.model.name = "fake_user";
    fixture.nativeElement.querySelector('[type="submit"]').click();
    expect(navigation).toHaveBeenCalledWith([ '/user', `${component.model.name}`]);
  });
});
