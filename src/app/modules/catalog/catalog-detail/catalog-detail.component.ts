import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogServicesService } from 'src/app/services/catalog-services.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {

  public catalogItem: any;

  constructor(private activeRoute: ActivatedRoute, private catalogService: CatalogServicesService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params) => {
        this.catalogService.fetchCatalogItemById(params['itemId']).subscribe(
          (response)=>{
            if(response && response.updated_at){
              response.updated_at = new Date(Date.parse(response.updated_at));
            }
            this.catalogItem = response;
          }
        )
      }
    )
  }

}
