import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo32Component } from './cairo32.component';

describe('Cairo32Component', () => {
  let component: Cairo32Component;
  let fixture: ComponentFixture<Cairo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo32Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
