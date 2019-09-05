import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { MatCardModule } from '@angular/material/card';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { MatTableModule } from '@angular/material'  
import { MatPaginator } from '@angular/material';
import { MatDividerModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposComponent, RepoListComponent, RepoDetailComponent, MatPaginator ],
      imports: [ MatCardModule, MatTableModule, MatDividerModule, 
        MatListModule, MatFormFieldModule, MatSelectModule, MatTooltipModule,
        BrowserAnimationsModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ReposComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));



  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
