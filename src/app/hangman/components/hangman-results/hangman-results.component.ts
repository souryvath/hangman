import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hangman-results',
  templateUrl: './hangman-results.component.html',
  styleUrls: ['./hangman-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanResultsComponent {

  @Input() status;

}
