import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConHomePage } from './con-home.page';

const routes: Routes = [
  {
    path: '',
    component: ConHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConHomePageRoutingModule {}
