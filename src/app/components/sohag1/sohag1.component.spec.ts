import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sohag1Component } from './sohag1.component';

describe('Sohag1Component', () => {
  let component: Sohag1Component;
  let fixture: ComponentFixture<Sohag1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sohag1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sohag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
