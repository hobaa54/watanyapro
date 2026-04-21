import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dakahlia1Component } from './dakahlia1.component';

describe('Dakahlia1Component', () => {
  let component: Dakahlia1Component;
  let fixture: ComponentFixture<Dakahlia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dakahlia1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dakahlia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
