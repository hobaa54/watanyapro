import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo26Component } from './cairo26.component';

describe('Cairo26Component', () => {
  let component: Cairo26Component;
  let fixture: ComponentFixture<Cairo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo26Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
