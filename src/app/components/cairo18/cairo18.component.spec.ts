import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo18Component } from './cairo18.component';

describe('Cairo18Component', () => {
  let component: Cairo18Component;
  let fixture: ComponentFixture<Cairo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
