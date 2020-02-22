import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromHangman from './reducer/hangman.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromHangman.hangmanFeatureKey, fromHangman.reducer)
  ]
})
export class HangmanStoreModule { }
