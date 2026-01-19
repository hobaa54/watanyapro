import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October1Component } from './october1.component';

describe('October1Component', () => {
  let component: October1Component;
  let fixture: ComponentFixture<October1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
