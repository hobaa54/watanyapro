import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ismailia2Component } from './ismailia2.component';

describe('Ismailia2Component', () => {
  let component: Ismailia2Component;
  let fixture: ComponentFixture<Ismailia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ismailia2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ismailia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
