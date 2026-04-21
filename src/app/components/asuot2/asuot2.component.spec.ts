import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asuot2Component } from './asuot2.component';

describe('Asuot2Component', () => {
  let component: Asuot2Component;
  let fixture: ComponentFixture<Asuot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asuot2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Asuot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
