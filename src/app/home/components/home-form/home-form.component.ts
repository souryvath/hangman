import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFormComponent {

  nameForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });
  @Output() readonly validEvent: EventEmitter<string> = new EventEmitter<string>();

  valid(): void {
    this.validEvent.emit(this.nameForm.value.name);
  }

}
