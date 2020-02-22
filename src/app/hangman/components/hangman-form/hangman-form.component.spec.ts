import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanFormComponent } from './hangman-form.component';

describe('HangmanFormComponent', () => {
  let component: HangmanFormComponent;
  let fixture: ComponentFixture<HangmanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
