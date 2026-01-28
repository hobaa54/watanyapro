import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorouk1Component } from './shorouk1.component';

describe('Shorouk1Component', () => {
  let component: Shorouk1Component;
  let fixture: ComponentFixture<Shorouk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shorouk1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorouk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
