import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConVisitasPage } from './con-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: ConVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConVisitasPageRoutingModule {}
