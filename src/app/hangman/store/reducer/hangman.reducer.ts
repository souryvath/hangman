import { Action, createReducer, on } from '@ngrx/store';
import * as HangmanActions from '../actions/hangman.actions';

export const hangmanFeatureKey = 'hangman';

export interface HangmanState {
  name: string;
  plainWord: string;
  word: Array<string>;
  hiddenWord: Array<string>;
  failedCharacters: Array<string>;
  failedAttempts: number;
  status: string;
}

export const initialState: HangmanState = {
  name: undefined,
  word: [],
  plainWord: undefined,
  hiddenWord: [],
  failedCharacters: [],
  failedAttempts: 0,
  status: 'NOT_FINISHED'
};

export const hangmanReducer = createReducer(
  initialState,
  on(HangmanActions.addName,
    (state, { name }) => ({ ...state, name})),
  on(HangmanActions.searchWord,
    (state, { plainWord }) => ({ ...state, plainWord, word: [...plainWord], hiddenWord: [...plainWord].fill('_')})),
  on(HangmanActions.updateHiddenWord,
    (state, { hiddenWord }) => ({ ...state, hiddenWord})),
  on(HangmanActions.updateFailedCharacters,
    (state, { failedCharacter }) => ({ ...state, failedCharacters: [...state.failedCharacters, failedCharacter]})),
  on(HangmanActions.updateFailedAttempts,
    (state) => ({ ...state, failedAttempts: state.failedAttempts + 1})),
  on(HangmanActions.updateStatus,
    (state, {status}) => ({ ...state, status})),
  on(HangmanActions.reset,
    (state) => ({...initialState, name: state.name})),
);

export function reducer(state: HangmanState | undefined, action: Action): HangmanState {
  return hangmanReducer(state, action);
}
