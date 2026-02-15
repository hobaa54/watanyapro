import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suez1Component } from './suez1.component';

describe('Suez1Component', () => {
  let component: Suez1Component;
  let fixture: ComponentFixture<Suez1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suez1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suez1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
