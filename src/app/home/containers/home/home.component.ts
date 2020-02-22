import { HangmanState } from '@hangman/store/reducer/hangman.reducer';
import * as HangmanActions from '@hangman/store/actions/hangman.actions';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(
    private readonly store: Store<HangmanState>,
    private readonly router: Router) { }

  onValidForm(name: string): void {
    this.store.dispatch(HangmanActions.addName({name}));
    this.router.navigateByUrl('hangman');
  }

}
