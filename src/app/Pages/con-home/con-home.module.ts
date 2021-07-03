import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConHomePageRoutingModule } from './con-home-routing.module';

import { ConHomePage } from './con-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConHomePageRoutingModule
  ],
  declarations: [ConHomePage]
})
export class ConHomePageModule {}
