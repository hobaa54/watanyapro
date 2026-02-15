import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suez3Component } from './suez3.component';

describe('Suez3Component', () => {
  let component: Suez3Component;
  let fixture: ComponentFixture<Suez3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suez3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suez3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
