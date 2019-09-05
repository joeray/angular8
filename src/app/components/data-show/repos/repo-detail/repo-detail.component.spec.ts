import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailComponent } from './repo-detail.component';
import { MatListModule } from '@angular/material';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDetailComponent ],
      imports: [ MatListModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show org with proper items', () => {
    component.repo = {
      "id": 3579302,
      "name": "argumentum",
      "url": "https://api.github.com/repos/paulmillr/argumentum",
      "stargazers_count": 8,
      "language": "JavaScript",
    };
    component.ngOnChanges();
    fixture.detectChanges();
    let renderedList = fixture.nativeElement.querySelectorAll('.detail-list mat-list-item');
    expect(renderedList[0].innerText).toEqual(`Id: 3579302`);
    expect(renderedList[1].innerText).toEqual(`Name: argumentum`);
    expect(renderedList[2].innerText).toEqual(`Url: https://api.github.com/repos/paulmillr/argumentum`);
    expect(renderedList[3].innerText).toEqual(`Stars: 8`);
    expect(renderedList[4].innerText).toEqual(`Language: JavaScript`);
  });
});
