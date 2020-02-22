import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHangman from '../reducer/hangman.reducer';

export const selectHangmanState = createFeatureSelector<fromHangman.HangmanState>(
  fromHangman.hangmanFeatureKey
);

export const selectName = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.name
);

export const selectWord = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.word
);

export const selectHiddenWord = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.hiddenWord
);

export const selectFailedAttempts = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.failedAttempts
);

export const selectFailedCharacters = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.failedCharacters
);

export const selectStatus = createSelector(
  selectHangmanState,
  (state: fromHangman.HangmanState) => state.status
);

