import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConCuotasPageRoutingModule } from './con-cuotas-routing.module';

import { ConCuotasPage } from './con-cuotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConCuotasPageRoutingModule
  ],
  declarations: [ConCuotasPage]
})
export class ConCuotasPageModule {}
