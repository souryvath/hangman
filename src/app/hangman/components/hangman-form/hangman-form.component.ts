import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hangman-form',
  templateUrl: './hangman-form.component.html',
  styleUrls: ['./hangman-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanFormComponent {

  hangmanForm = new FormGroup({
    character: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ])
  });

  @Input() word: Array<string>;
  @Input() hiddenWord: Array<string>;
  @Input() failedAttempts: number;
  @Input() maxAttempts: number;
  @Output() readonly validCharacterEvent: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() readonly statusEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() readonly failCharacterEvent: EventEmitter<string> = new EventEmitter<string>();

  valid(): void {
    const inputCharacter = this.hangmanForm.value.character.toLowerCase();
    const hiddenWorldFilled = [...this.hiddenWord];
    if (this.isCharacterPresentInWord() === true) {
      this.replaceString(inputCharacter, hiddenWorldFilled);
      this.validCharacterEvent.emit(hiddenWorldFilled);
      this.emitStatus(hiddenWorldFilled);
    } else {
      this.failCharacterEvent.emit(inputCharacter);
      this.emitStatus(hiddenWorldFilled);
    }
    this.hangmanForm.reset();
  }

  private replaceString(inputCharacter: string, hiddenWorldFilled: string[]): void {
    this.word.forEach((character, index) => {
      if (character === inputCharacter) {
        hiddenWorldFilled[index] = inputCharacter;
      }
    });
  }

  private emitStatus(hiddenWorldFilled: Array<string>): void {
    if (this.failedAttempts === this.maxAttempts - 1) {
      this.statusEvent.emit('LOST');
      return;
    }
    if (this.word.toString() === hiddenWorldFilled.toString()) {
      this.statusEvent.emit('WIN');
      return;
    }
  }

  private isCharacterPresentInWord(): boolean {
    const index = this.word.findIndex(character => character === this.hangmanForm.value.character.toLowerCase());
    if (index !== -1) {
      return (true);
    }
    return (false);
  }

}
