import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo33Component } from './cairo33.component';

describe('Cairo33Component', () => {
  let component: Cairo33Component;
  let fixture: ComponentFixture<Cairo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo33Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
