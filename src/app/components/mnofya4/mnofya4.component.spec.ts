import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnofya4Component } from './mnofya4.component';

describe('Mnofya4Component', () => {
  let component: Mnofya4Component;
  let fixture: ComponentFixture<Mnofya4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mnofya4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mnofya4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
