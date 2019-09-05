import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';
import { Repo } from '../../models/repo';
import { User } from '../../models/user';
import { Org } from '../../models/org';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.sass'],
  providers: [AppService]
})
export class DataShowComponent implements OnInit, OnDestroy {
  @Input() repos: Array<Repo>;
  selectedId: number;
  params: ActivatedRoute;
  userName: string;
  user: User = { id: null, name: '', avatar_url: '', bio: '', url: '', email: '', followers: null, following: null };
  orgs: Array<Org> = [];
  reposSubscription: Subscription;
  userOrgsSubscription: Subscription;
  repoSelected: Repo;
  loading: Boolean;
  successRequest: Boolean = false;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.successRequest = false;


    this.dataRequest();
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.dataRequest();
      }
    });
  }

  dataRequest() {
    this.loading = true;
    this.successRequest = false;

    this.userName = this.route.snapshot.params.user;

    this.reposSubscription = this.appService.getRepos(this.userName)
      .subscribe(
        (repos) => { this.repos = repos; this.loading = false; this.successRequest = true; },
        (error) => { console.log('Error Getting repos: ', error); this.loading = false; this.successRequest = false; }
      );

    this.userOrgsSubscription = this.appService.getData(this.userName)
      .subscribe(
        (x) => {
          this.loading = false;
          if (x.type === 'User') {
            this.user = x;
          } else if (Array.isArray(x)) {
            this.orgs = x;
          }
        },
        (error) => {
          console.log('Error Getting data: ', error);
          this.loading = false;
          this.successRequest = false;
        }
      );
  }

  ngOnDestroy() {
    this.reposSubscription.unsubscribe();
    this.userOrgsSubscription.unsubscribe();
  }

}
