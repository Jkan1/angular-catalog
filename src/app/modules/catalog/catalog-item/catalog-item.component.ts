import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

  @Input('catalogItem') public catalogItem: any;

  constructor() { }

  ngOnInit(): void { }

}
