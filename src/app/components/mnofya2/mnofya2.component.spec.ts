import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnofya2Component } from './mnofya2.component';

describe('Mnofya2Component', () => {
  let component: Mnofya2Component;
  let fixture: ComponentFixture<Mnofya2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mnofya2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mnofya2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
