import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ismailia3Component } from './ismailia3.component';

describe('Ismailia3Component', () => {
  let component: Ismailia3Component;
  let fixture: ComponentFixture<Ismailia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ismailia3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ismailia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
