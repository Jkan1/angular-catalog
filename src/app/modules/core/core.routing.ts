import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenComponent } from './screen/screen.component'

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'exact',
        component: ScreenComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }