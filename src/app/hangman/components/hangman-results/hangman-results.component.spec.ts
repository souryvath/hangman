import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanResultsComponent } from './hangman-results.component';

describe('HangmanResultsComponent', () => {
  let component: HangmanResultsComponent;
  let fixture: ComponentFixture<HangmanResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
