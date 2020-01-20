import { Component, OnInit } from '@angular/core';
import { IdleMonitorService, ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  private linksSource = new BehaviorSubject<ScullyRoute[] | null>(null);
  links$ = this.linksSource.asObservable();

  constructor(private scully: ScullyRoutesService, private idle: IdleMonitorService) {}

  ngOnInit(): void {
    this.scully.available$
      .pipe(
        filter(links => links != null),
        map((links: ScullyRoute[]) => links.filter(link => link.route.match(/^\/blog\//)))
      )
      .subscribe(links => {
        this.linksSource.next(links);
      });
  }
}
