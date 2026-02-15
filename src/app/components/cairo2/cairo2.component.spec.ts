import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo2Component } from './cairo2.component';

describe('Cairo2Component', () => {
  let component: Cairo2Component;
  let fixture: ComponentFixture<Cairo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
