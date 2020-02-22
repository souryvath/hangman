import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    loadChildren: () => import('./hangman/hangman.module')
      .then(m => m.HangmanModule),
    path: 'hangman'
  },
  {
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    path: 'home'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
