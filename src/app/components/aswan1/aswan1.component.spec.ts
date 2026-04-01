import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aswan1Component } from './aswan1.component';

describe('Aswan1Component', () => {
  let component: Aswan1Component;
  let fixture: ComponentFixture<Aswan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aswan1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aswan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
