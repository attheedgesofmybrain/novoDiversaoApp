import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KakeguruiPage } from './kakegurui.page';

const routes: Routes = [
  {
    path: '',
    component: KakeguruiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KakeguruiPageRoutingModule {}
