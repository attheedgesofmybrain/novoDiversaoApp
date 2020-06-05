import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WestworldPage } from './westworld.page';

const routes: Routes = [
  {
    path: '',
    component: WestworldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestworldPageRoutingModule {}
