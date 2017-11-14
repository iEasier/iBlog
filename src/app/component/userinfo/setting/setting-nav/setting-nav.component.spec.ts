import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingNavComponent } from './setting-nav.component';

describe('SettingNavComponent', () => {
  let component: SettingNavComponent;
  let fixture: ComponentFixture<SettingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
