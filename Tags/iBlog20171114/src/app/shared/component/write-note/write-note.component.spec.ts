/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WriteNoteComponent } from './write-note.component';

describe('WriteNoteComponent', () => {
  let component: WriteNoteComponent;
  let fixture: ComponentFixture<WriteNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
