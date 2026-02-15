import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizaC2Component } from './giza-c2.component';

describe('GizaC2Component', () => {
  let component: GizaC2Component;
  let fixture: ComponentFixture<GizaC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GizaC2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GizaC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
