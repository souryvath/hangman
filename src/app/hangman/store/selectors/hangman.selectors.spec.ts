import * as fromHangman from '../reducer/hangman.reducer';
import { selectHangmanState } from './hangman.selectors';

describe('Hangman Selectors', () => {
  it('should select the feature state', () => {
    const result = selectHangmanState({
      [fromHangman.hangmanFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
