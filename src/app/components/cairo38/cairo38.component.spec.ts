import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo38Component } from './cairo38.component';

describe('Cairo38Component', () => {
  let component: Cairo38Component;
  let fixture: ComponentFixture<Cairo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo38Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
