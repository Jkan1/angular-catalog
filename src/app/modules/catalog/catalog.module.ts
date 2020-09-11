import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';



@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
