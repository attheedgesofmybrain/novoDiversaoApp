import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoGameNoLifePageRoutingModule } from './no-game-no-life-routing.module';

import { NoGameNoLifePage } from './no-game-no-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoGameNoLifePageRoutingModule
  ],
  declarations: [NoGameNoLifePage]
})
export class NoGameNoLifePageModule {}
