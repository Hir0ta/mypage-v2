import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorClockComponent } from './color-clock.component';

describe('ColorClockComponent', () => {
  let component: ColorClockComponent;
  let fixture: ComponentFixture<ColorClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
