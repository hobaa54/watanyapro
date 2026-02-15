import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo6Component } from './cairo6.component';

describe('Cairo6Component', () => {
  let component: Cairo6Component;
  let fixture: ComponentFixture<Cairo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
