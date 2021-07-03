import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConCuotasPage } from './con-cuotas.page';

const routes: Routes = [
  {
    path: '',
    component: ConCuotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConCuotasPageRoutingModule {}
