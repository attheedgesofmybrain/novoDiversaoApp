import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoGameNoLifePage } from './no-game-no-life.page';

const routes: Routes = [
  {
    path: '',
    component: NoGameNoLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoGameNoLifePageRoutingModule {}
