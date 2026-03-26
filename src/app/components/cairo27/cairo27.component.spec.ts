import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo27Component } from './cairo27.component';

describe('Cairo27Component', () => {
  let component: Cairo27Component;
  let fixture: ComponentFixture<Cairo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo27Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
