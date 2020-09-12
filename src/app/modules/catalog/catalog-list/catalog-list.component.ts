import { Component, OnInit } from '@angular/core';

import { CatalogServicesService } from '../../../services/catalog-services.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  public catalogList = [];

  constructor(private catalogService: CatalogServicesService) { }

  ngOnInit(): void {
    this.catalogService.fetchCatalog().subscribe(
      (response)=>{
        this.catalogList = response;
      }
    );
  }

}
