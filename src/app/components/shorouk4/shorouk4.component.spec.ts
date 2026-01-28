import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorouk4Component } from './shorouk4.component';

describe('Shorouk4Component', () => {
  let component: Shorouk4Component;
  let fixture: ComponentFixture<Shorouk4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shorouk4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorouk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
