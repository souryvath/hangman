import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { HangmanStoreModule } from '@hangman/store/hangman-store.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HangmanStoreModule,
    SharedModule
  ]
})
export class HomeModule { }
