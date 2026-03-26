import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo12Component } from './cairo12.component';

describe('Cairo12Component', () => {
  let component: Cairo12Component;
  let fixture: ComponentFixture<Cairo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
