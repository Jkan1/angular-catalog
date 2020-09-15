import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { CatalogRoutingModule } from './catalog.routing';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogDetailComponent,
    CatalogItemComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
