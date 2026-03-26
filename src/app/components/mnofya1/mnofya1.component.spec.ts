import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnofya1Component } from './mnofya1.component';

describe('Mnofya1Component', () => {
  let component: Mnofya1Component;
  let fixture: ComponentFixture<Mnofya1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mnofya1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mnofya1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
