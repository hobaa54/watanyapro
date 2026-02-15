import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizaC3Component } from './giza-c3.component';

describe('GizaC3Component', () => {
  let component: GizaC3Component;
  let fixture: ComponentFixture<GizaC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GizaC3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GizaC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
