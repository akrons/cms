import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { IPayload } from '../../payload';
import { ContentService } from '../../services/content.service';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, filter, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'cms-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  elements: Observable<IPayload[]>;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const activatedRouteSnapshot = this.route.snapshot;
    if (activatedRouteSnapshot.data['template']) {
      this.elements = of(activatedRouteSnapshot.data['template']);
      return;
    }
    const route = activatedRouteSnapshot.url.map(x => x.toString()).join('/');
    const page = this.contentService.loadPage(route);
    this.elements = page.pipe(map(x => x.elements));
  }

}
