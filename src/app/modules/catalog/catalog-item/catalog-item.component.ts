import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css'],
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
export class CatalogItemComponent implements OnInit {

  @Input('catalogItem') public catalogItem: any;

  public imageState = 'loading';

  constructor() { }

  ngOnInit(): void { }

  onImageLoad() {
    this.imageState = 'loaded';
  }

}
