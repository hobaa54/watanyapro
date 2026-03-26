import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo14Component } from './cairo14.component';

describe('Cairo14Component', () => {
  let component: Cairo14Component;
  let fixture: ComponentFixture<Cairo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
