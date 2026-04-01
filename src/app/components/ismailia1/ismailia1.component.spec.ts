import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ismailia1Component } from './ismailia1.component';

describe('Ismailia1Component', () => {
  let component: Ismailia1Component;
  let fixture: ComponentFixture<Ismailia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ismailia1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ismailia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
