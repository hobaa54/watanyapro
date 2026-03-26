import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub7Component } from './qalyub7.component';

describe('Qalyub7Component', () => {
  let component: Qalyub7Component;
  let fixture: ComponentFixture<Qalyub7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
