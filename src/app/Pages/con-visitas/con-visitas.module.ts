import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConVisitasPageRoutingModule } from './con-visitas-routing.module';

import { ConVisitasPage } from './con-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConVisitasPageRoutingModule
  ],
  declarations: [ConVisitasPage]
})
export class ConVisitasPageModule {}
