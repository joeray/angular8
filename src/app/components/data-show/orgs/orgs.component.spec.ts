import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatListModule } from '@angular/material'  
import { MatPaginator } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { OrgsComponent } from './orgs.component';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
describe('OrgsComponent', () => {
  let component: OrgsComponent;
  let fixture: ComponentFixture<OrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPaginator, OrgsComponent, OrgListComponent, OrgDetailComponent ],
      imports: [BrowserAnimationsModule,MatListModule,MatTooltipModule,MatCardModule, MatTableModule,MatFormFieldModule,MatSelectModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
