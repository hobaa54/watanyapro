import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suez2Component } from './suez2.component';

describe('Suez2Component', () => {
  let component: Suez2Component;
  let fixture: ComponentFixture<Suez2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suez2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suez2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
