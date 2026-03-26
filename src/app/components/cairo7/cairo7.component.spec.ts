import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo7Component } from './cairo7.component';

describe('Cairo7Component', () => {
  let component: Cairo7Component;
  let fixture: ComponentFixture<Cairo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
