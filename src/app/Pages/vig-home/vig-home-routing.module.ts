import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigHomePage } from './vig-home.page';

const routes: Routes = [
  {
    path: '',
    component: VigHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigHomePageRoutingModule {}
