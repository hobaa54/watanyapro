import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex1Component } from './alex1.component';

describe('Alex1Component', () => {
  let component: Alex1Component;
  let fixture: ComponentFixture<Alex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
