import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo10Component } from './cairo10.component';

describe('Cairo10Component', () => {
  let component: Cairo10Component;
  let fixture: ComponentFixture<Cairo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
