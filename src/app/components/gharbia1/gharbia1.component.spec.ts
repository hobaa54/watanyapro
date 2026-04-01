import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gharbia1Component } from './gharbia1.component';

describe('Gharbia1Component', () => {
  let component: Gharbia1Component;
  let fixture: ComponentFixture<Gharbia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gharbia1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gharbia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
