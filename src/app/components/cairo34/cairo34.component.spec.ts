import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo34Component } from './cairo34.component';

describe('Cairo34Component', () => {
  let component: Cairo34Component;
  let fixture: ComponentFixture<Cairo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo34Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
