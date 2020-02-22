import { createAction, props } from '@ngrx/store';

export const addName = createAction(
  '[Hangman] Add name',
  props<{name: string}>()
);

export const searchWord = createAction(
  '[Hangman] search word',
  props<{plainWord: string}>()
);

export const updateHiddenWord = createAction(
  '[Hangman] update hidden word',
  props<{hiddenWord: string[]}>()
);

export const updateFailedAttempts = createAction(
  '[Hangman] update failed attempts'
);

export const updateFailedCharacters = createAction(
  '[Hangman] update failed Characters',
  props<{failedCharacter: string}>()
);

export const updateStatus = createAction(
  '[Hangman] update status',
  props<{status: string}>()
);

export const reset = createAction(
  '[Hangman] reset'
);
