import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaternumberComponent } from './greaternumber.component';

describe('GreaternumberComponent', () => {
  let component: GreaternumberComponent;
  let fixture: ComponentFixture<GreaternumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreaternumberComponent]
    });
    fixture = TestBed.createComponent(GreaternumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
