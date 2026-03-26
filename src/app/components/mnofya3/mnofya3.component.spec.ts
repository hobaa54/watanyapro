import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnofya3Component } from './mnofya3.component';

describe('Mnofya3Component', () => {
  let component: Mnofya3Component;
  let fixture: ComponentFixture<Mnofya3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mnofya3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mnofya3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
