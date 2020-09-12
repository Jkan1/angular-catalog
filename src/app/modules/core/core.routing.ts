import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenComponent } from './screen/screen.component'

export const routes: Routes = [
    {
        path: "",
        component: ScreenComponent,
        loadChildren: () => import('../catalog/catalog.module').then((m) => m.CatalogModule)
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }