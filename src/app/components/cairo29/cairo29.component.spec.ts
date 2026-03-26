import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo29Component } from './cairo29.component';

describe('Cairo29Component', () => {
  let component: Cairo29Component;
  let fixture: ComponentFixture<Cairo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo29Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
