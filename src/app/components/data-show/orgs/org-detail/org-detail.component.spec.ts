import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDetailComponent } from './org-detail.component';
import { MatListModule } from '@angular/material';

describe('OrgDetailComponent', () => {
  let component: OrgDetailComponent;
  let fixture: ComponentFixture<OrgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDetailComponent ],
      imports: [ MatListModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show org with proper items', () => {
    component.org =   {
      "login": "brunch",
      "id": 575509,
      "url": "https://api.github.com/orgs/brunch",
      "avatar_url": "https://avatars0.githubusercontent.com/u/575509?v=4",
      "description": "HTML5 applications made easy."
    };
    component.ngOnChanges();
    fixture.detectChanges();
    let renderedList = fixture.nativeElement.querySelectorAll('.detail-list mat-list-item');
    expect(renderedList[0].innerText).toEqual(`Id: 575509`);
    expect(renderedList[1].innerText).toEqual(`Name: brunch`);
    expect(renderedList[2].innerText).toEqual(`Url: https://api.github.com/orgs/brunch`);
    expect(renderedList[3].innerText).toEqual(`Description: HTML5 applications made easy.`);
  });
});
