import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: ['./hangman-word.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanWordComponent {

  @Input() hiddenWord: Array<string>;
}
