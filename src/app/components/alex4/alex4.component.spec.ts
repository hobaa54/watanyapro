import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex4Component } from './alex4.component';

describe('Alex4Component', () => {
  let component: Alex4Component;
  let fixture: ComponentFixture<Alex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
