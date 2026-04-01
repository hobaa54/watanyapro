import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex2Component } from './alex2.component';

describe('Alex2Component', () => {
  let component: Alex2Component;
  let fixture: ComponentFixture<Alex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
