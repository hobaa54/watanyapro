import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behera1Component } from './behera1.component';

describe('Behera1Component', () => {
  let component: Behera1Component;
  let fixture: ComponentFixture<Behera1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behera1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behera1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
