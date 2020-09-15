import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CatalogService } from 'src/app/services/catalog-services.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css'],
  animations: [
    trigger('animationState', [
      state('loading', style({
        opacity: 0
      })),
      state('loaded', style({
        opacity: 100
      })),
      transition('loading <=> loaded', [
        animate(600)
      ])
    ]),
    trigger('textState', [
      state('loading', style({
        opacity: 0
      })),
      state('loaded', style({
        opacity: 100
      })),
      transition('loading <=> loaded', [
        animate(1000)
      ])
    ])
  ]
})
export class CatalogDetailComponent implements OnInit {

  public catalogItem: any;
  public loading = true;
  public imageState = 'loading';
  public textState = 'loading';
  private itemId: string;

  constructor(private activeRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params) => {
        this.itemId = params['itemId'];
        this.catalogService.fetchCatalogItemById(this.itemId).subscribe(
          (response) => {
            if (response && response.updated_at) {
              response.updated_at = new Date(Date.parse(response.updated_at));
            }
            this.catalogItem = response;
            this.loading = false;
          }
        )
      }
    )
  }

  onImageLoad() {
    this.imageState = 'loaded';
    this.textState = 'loaded';
  }

  loadPage(next: boolean) {
    this.loading = true;
    if (this.itemId) {
      this.catalogService.nextItemId(this.itemId, next).subscribe((nextItemId) => {
        if (nextItemId) {
          this.imageState = 'loading';
          this.textState = 'loading';
          this.router.navigate(['/id', nextItemId]);
        }
      });
    } else {
      this.loading = false;
    }
  }

}
