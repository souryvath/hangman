import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from './containers/hangman/hangman.component';

export const hangmanRoutes: Routes = [
  {
    component: HangmanComponent,
    path: '',
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(hangmanRoutes)
  ]
})
export class HangmanRoutingModule {
}
