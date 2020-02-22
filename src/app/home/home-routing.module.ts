import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';

export const homeRoutes: Routes = [
  {
    component: HomeComponent,
    path: '',
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeRoutingModule {
}
