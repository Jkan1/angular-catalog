import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';

import { CatalogListComponent } from './catalog-list/catalog-list.component';

export const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: CatalogListComponent
            },
            {
                path:"id/:itemId",
                component: CatalogDetailComponent
            }
        ]
    },

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule { }