import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrouh1Component } from './matrouh1.component';

describe('Matrouh1Component', () => {
  let component: Matrouh1Component;
  let fixture: ComponentFixture<Matrouh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matrouh1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Matrouh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
