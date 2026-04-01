import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex3Component } from './alex3.component';

describe('Alex3Component', () => {
  let component: Alex3Component;
  let fixture: ComponentFixture<Alex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
