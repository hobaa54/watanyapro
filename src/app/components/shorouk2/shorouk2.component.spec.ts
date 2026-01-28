import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorouk2Component } from './shorouk2.component';

describe('Shorouk2Component', () => {
  let component: Shorouk2Component;
  let fixture: ComponentFixture<Shorouk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shorouk2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorouk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
