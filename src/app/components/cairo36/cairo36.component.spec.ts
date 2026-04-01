import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo36Component } from './cairo36.component';

describe('Cairo36Component', () => {
  let component: Cairo36Component;
  let fixture: ComponentFixture<Cairo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo36Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
