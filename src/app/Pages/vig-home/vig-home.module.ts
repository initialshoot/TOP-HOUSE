import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigHomePageRoutingModule } from './vig-home-routing.module';

import { VigHomePage } from './vig-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigHomePageRoutingModule
  ],
  declarations: [VigHomePage]
})
export class VigHomePageModule {}
