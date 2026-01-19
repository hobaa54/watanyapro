import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sadat1Component } from './sadat1.component';

describe('Sadat1Component', () => {
  let component: Sadat1Component;
  let fixture: ComponentFixture<Sadat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sadat1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sadat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
