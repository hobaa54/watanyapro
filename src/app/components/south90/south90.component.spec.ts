import { ComponentFixture, TestBed } from '@angular/core/testing';

import { South90Component } from './south90.component';

describe('South90Component', () => {
  let component: South90Component;
  let fixture: ComponentFixture<South90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [South90Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(South90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
