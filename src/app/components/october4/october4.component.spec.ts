import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October4Component } from './october4.component';

describe('October4Component', () => {
  let component: October4Component;
  let fixture: ComponentFixture<October4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
