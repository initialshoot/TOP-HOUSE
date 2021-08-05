import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPswPage } from './reset-psw.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPswPageRoutingModule {}
