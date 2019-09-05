import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShowComponent } from './data-show.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReposComponent } from './repos/repos.component';
import { RepoListComponent } from './repos/repo-list/repo-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatFormFieldModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RepoDetailComponent } from './repos/repo-detail/repo-detail.component';
import { MatListModule } from '@angular/material';
import { OrgsComponent } from './orgs/orgs.component';
import { OrgListComponent } from './orgs/org-list/org-list.component';
import { OrgDetailComponent } from './orgs/org-detail/org-detail.component';
import { AppService } from 'src/app/app.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from '../messages/messages.component';

describe('DataShowComponent', () => {
  let component: DataShowComponent;
  let fixture: ComponentFixture<DataShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent, OrgDetailComponent, OrgListComponent, OrgsComponent, RepoDetailComponent, MatPaginator, RepoListComponent, ReposComponent, DataShowComponent, UserDetailComponent ],
      imports: [ BrowserAnimationsModule, RouterTestingModule, HttpClientTestingModule, MatListModule, MatTooltipModule, MatSelectModule, MatFormFieldModule, FormsModule, MatTableModule, MatProgressSpinnerModule, MatCardModule],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load initial spinner', () => {
    expect(fixture.nativeElement.querySelector('mat-progress-spinner')).not.toBeNull();
  });
});
