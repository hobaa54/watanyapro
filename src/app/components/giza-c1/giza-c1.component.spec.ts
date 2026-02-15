import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizaC1Component } from './giza-c1.component';

describe('GizaC1Component', () => {
  let component: GizaC1Component;
  let fixture: ComponentFixture<GizaC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GizaC1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GizaC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
