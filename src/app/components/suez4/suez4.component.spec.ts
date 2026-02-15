import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suez4Component } from './suez4.component';

describe('Suez4Component', () => {
  let component: Suez4Component;
  let fixture: ComponentFixture<Suez4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suez4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suez4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
