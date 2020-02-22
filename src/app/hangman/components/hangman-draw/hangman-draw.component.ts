import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-draw',
  templateUrl: './hangman-draw.component.html',
  styleUrls: ['./hangman-draw.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanDrawComponent {

  @Input() failedAttempts;
  @Input() failedCharacters: Array<string>;
  @Input() maxAttempts;

  hangmanGallowPictures: Array<string> = [
    '../../../../assets/hangman/0.png',
    '../../../../assets/hangman/1.png',
    '../../../../assets/hangman/2.png',
    '../../../../assets/hangman/3.png',
    '../../../../assets/hangman/4.png',
    '../../../../assets/hangman/5.png',
    '../../../../assets/hangman/6.png',
    '../../../../assets/hangman/7.png',
    '../../../../assets/hangman/8.png',
  ];


}
