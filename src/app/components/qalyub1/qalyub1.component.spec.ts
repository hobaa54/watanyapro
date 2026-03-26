import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub1Component } from './qalyub1.component';

describe('Qalyub1Component', () => {
  let component: Qalyub1Component;
  let fixture: ComponentFixture<Qalyub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
