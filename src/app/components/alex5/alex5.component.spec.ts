import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex5Component } from './alex5.component';

describe('Alex5Component', () => {
  let component: Alex5Component;
  let fixture: ComponentFixture<Alex5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alex5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
