import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrouh3Component } from './matrouh3.component';

describe('Matrouh3Component', () => {
  let component: Matrouh3Component;
  let fixture: ComponentFixture<Matrouh3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matrouh3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Matrouh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
