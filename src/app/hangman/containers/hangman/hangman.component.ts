import { Observable } from 'rxjs';
import { HangmanState } from '@hangman/store/reducer/hangman.reducer';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as HangmanActions from '@hangman/store/actions/hangman.actions';
import {
  selectHiddenWord,
  selectWord,
  selectFailedAttempts,
  selectFailedCharacters,
  selectName,
  selectStatus
} from '@hangman/store/selectors/hangman.selectors';
import { WORDS } from '@hangman/constants/words';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanComponent implements OnInit {

  hiddenWord$: Observable<Array<string>>;
  word$: Observable<Array<string>>;
  name$: Observable<string>;
  failedAttempts$: Observable<number>;
  failedCharacters$: Observable<Array<string>>;
  status$: Observable<string>;
  maxAttempts = 8;

  constructor(private readonly store: Store<HangmanState>) {
    this.hiddenWord$ = this.store.pipe(select(selectHiddenWord));
    this.word$ = this.store.pipe(select(selectWord));
    this.failedAttempts$ = this.store.pipe(select(selectFailedAttempts));
    this.failedCharacters$ = this.store.pipe(select(selectFailedCharacters));
    this.status$ = this.store.pipe(select(selectStatus));
    this.name$ = this.store.pipe(select(selectName));
   }

  ngOnInit(): void {
    this.getNewWord();
  }

  onValidCharacterForm(hiddenWord: Array<string>): void {
    this.store.dispatch(HangmanActions.updateHiddenWord({hiddenWord}));
  }

  onFailCharacterForm(failedCharacter: string): void {
    this.store.dispatch(HangmanActions.updateFailedAttempts());
    this.store.dispatch(HangmanActions.updateFailedCharacters({failedCharacter}));
  }

  onStatus(status: string): void {
    this.store.dispatch(HangmanActions.updateStatus({status}));
  }

  reset(): void {
    this.store.dispatch(HangmanActions.reset());
    this.getNewWord();
  }

  private getNewWord(): void {
    const plainWord = WORDS[Math.floor(Math.random() * (WORDS.length - 1))];
    this.store.dispatch(HangmanActions.searchWord({plainWord}));
  }

}
