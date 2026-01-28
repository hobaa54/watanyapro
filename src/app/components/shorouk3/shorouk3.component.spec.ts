import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorouk3Component } from './shorouk3.component';

describe('Shorouk3Component', () => {
  let component: Shorouk3Component;
  let fixture: ComponentFixture<Shorouk3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shorouk3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorouk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
