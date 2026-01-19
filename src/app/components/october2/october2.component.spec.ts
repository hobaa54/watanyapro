import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October2Component } from './october2.component';

describe('October2Component', () => {
  let component: October2Component;
  let fixture: ComponentFixture<October2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
