import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    ])
  ]
})
export class CatalogDetailComponent implements OnInit {

  public catalogItem: any;
  public loading = true;
  public imageState = 'loading';

  constructor(private activeRoute: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params) => {
        this.catalogService.fetchCatalogItemById(params['itemId']).subscribe(
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
  }

}
