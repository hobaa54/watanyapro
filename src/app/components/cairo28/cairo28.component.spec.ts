import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo28Component } from './cairo28.component';

describe('Cairo28Component', () => {
  let component: Cairo28Component;
  let fixture: ComponentFixture<Cairo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
