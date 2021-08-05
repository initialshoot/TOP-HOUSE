import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPswPageRoutingModule } from './reset-psw-routing.module';

import { ResetPswPage } from './reset-psw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPswPageRoutingModule
  ],
  declarations: [ResetPswPage]
})
export class ResetPswPageModule {}
