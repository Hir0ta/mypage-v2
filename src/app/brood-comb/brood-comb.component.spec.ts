import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroodCombComponent } from './brood-comb.component';

describe('BroodCombComponent', () => {
  let component: BroodCombComponent;
  let fixture: ComponentFixture<BroodCombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroodCombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroodCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
