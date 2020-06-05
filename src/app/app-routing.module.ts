import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'star-wars',
    loadChildren: () => import('./filmes/star-wars/star-wars.module').then( m => m.StarWarsPageModule)
  },
  {
    path: 'game-of-thrones',
    loadChildren: () => import('./series/game-of-thrones/game-of-thrones.module').then( m => m.GameOfThronesPageModule)
  },
  {
    path: 'westworld',
    loadChildren: () => import('./series/westworld/westworld.module').then( m => m.WestworldPageModule)
  },
  {
    path: 'no-game-no-life',
    loadChildren: () => import('./desenhos/no-game-no-life/no-game-no-life.module').then( m => m.NoGameNoLifePageModule)
  },
  {
    path: 'kakegurui',
    loadChildren: () => import('./desenhos/kakegurui/kakegurui.module').then( m => m.KakeguruiPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
