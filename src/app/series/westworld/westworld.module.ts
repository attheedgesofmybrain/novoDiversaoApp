import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WestworldPageRoutingModule } from './westworld-routing.module';

import { WestworldPage } from './westworld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WestworldPageRoutingModule
  ],
  declarations: [WestworldPage]
})
export class WestworldPageModule {}
