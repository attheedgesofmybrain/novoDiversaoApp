import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KakeguruiPageRoutingModule } from './kakegurui-routing.module';

import { KakeguruiPage } from './kakegurui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KakeguruiPageRoutingModule
  ],
  declarations: [KakeguruiPage]
})
export class KakeguruiPageModule {}
