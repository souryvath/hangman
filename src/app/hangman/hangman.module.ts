import { HangmanRoutingModule } from './hangman-routing.module';
import { HangmanStoreModule } from './store/hangman-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './containers/hangman/hangman.component';
import { HangmanFormComponent } from './components/hangman-form/hangman-form.component';
import { HangmanWordComponent } from './components/hangman-word/hangman-word.component';
import { HangmanDrawComponent } from './components/hangman-draw/hangman-draw.component';
import { SharedModule } from '@shared/shared.module';
import { HangmanResultsComponent } from './components/hangman-results/hangman-results.component';

@NgModule({
  declarations: [
    HangmanComponent,
    HangmanFormComponent,
    HangmanWordComponent,
    HangmanDrawComponent,
    HangmanResultsComponent
  ],
  imports: [
    CommonModule,
    HangmanStoreModule,
    HangmanRoutingModule,
    SharedModule
  ]
})
export class HangmanModule { }
