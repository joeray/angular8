import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material'
import { MatPaginator } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { OrgListComponent } from './org-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrgListComponent', () => {
  let component: OrgListComponent;
  let fixture: ComponentFixture<OrgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrgListComponent, MatPaginator],
      imports: [BrowserAnimationsModule, MatTooltipModule, MatSelectModule, MatTableModule, MatFormFieldModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show org list with proper items', () => {
    const tableHead = fixture.nativeElement.querySelectorAll('table thead tr th');
    expect(tableHead[0].innerText).toEqual('No.');
    expect(tableHead[1].innerText).toEqual('Name');

    component.orgs = [{
      "login": "brunch",
      "id": 575509,
      "url": "https://api.github.com/orgs/brunch",
      "avatar_url": "https://avatars0.githubusercontent.com/u/575509?v=4",
      "description": "HTML5 applications made easy."
    }, {
      "login": "fake_",
      "id": 599999,
      "url": "https://api.github.com/orgs/fake_",
      "avatar_url": "https://avatars0.githubusercontent.com/u/575509?v=4",
      "description": "HTML5 applications made easy."
    }
    ];
    component.ngOnChanges();
    fixture.detectChanges();
    const tableBody = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableBody[0].querySelectorAll('td')[0].querySelector('a').innerText).toEqual('575509');
    expect(tableBody[0].querySelectorAll('td')[1].querySelector('a').innerText).toEqual('brunch');
  });
});
