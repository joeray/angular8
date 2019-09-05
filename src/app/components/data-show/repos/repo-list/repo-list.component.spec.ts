import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material'  
import { MatPaginator } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { RepoListComponent } from './repo-list.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoListComponent, MatPaginator ],
      imports: [ BrowserAnimationsModule, MatTooltipModule, MatSelectModule, MatTableModule, MatFormFieldModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show repo list with proper items', () => {
    const tableHead = fixture.nativeElement.querySelectorAll('table thead tr th');
    expect(tableHead[0].innerText).toEqual('No.');
    expect(tableHead[1].innerText).toEqual('Name');

    component.repos = [{
      "id": 3579302,
      "name": "argumentum",
      "url": "https://api.github.com/repos/paulmillr/argumentum",
      "stargazers_count": 8,
      "language": "JavaScript",
    },{
      "id": 9999302,
      "name": "fake_name",
      "url": "https://api.github.com/repos/paulmillr/argumentum",
      "stargazers_count": 10,
      "language": "python",
    }
    ];
    component.ngOnChanges();
    fixture.detectChanges();
    const tableBody = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableBody[0].querySelectorAll('td')[0].querySelector('a').innerText).toEqual('3579302');
    expect(tableBody[0].querySelectorAll('td')[1].querySelector('a').innerText).toEqual('argumentum');
  });
});
