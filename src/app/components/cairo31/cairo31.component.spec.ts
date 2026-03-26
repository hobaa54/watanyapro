import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo31Component } from './cairo31.component';

describe('Cairo31Component', () => {
  let component: Cairo31Component;
  let fixture: ComponentFixture<Cairo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo31Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
