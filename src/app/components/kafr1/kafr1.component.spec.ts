import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kafr1Component } from './kafr1.component';

describe('Kafr1Component', () => {
  let component: Kafr1Component;
  let fixture: ComponentFixture<Kafr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kafr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Kafr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
