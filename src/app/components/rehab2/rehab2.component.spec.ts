import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rehab2Component } from './rehab2.component';

describe('Rehab2Component', () => {
  let component: Rehab2Component;
  let fixture: ComponentFixture<Rehab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rehab2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Rehab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
