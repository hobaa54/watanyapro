import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo15Component } from './cairo15.component';

describe('Cairo15Component', () => {
  let component: Cairo15Component;
  let fixture: ComponentFixture<Cairo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
