import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asuot1Component } from './asuot1.component';

describe('Asuot1Component', () => {
  let component: Asuot1Component;
  let fixture: ComponentFixture<Asuot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asuot1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Asuot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
