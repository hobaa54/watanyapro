import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alamin1Component } from './alamin1.component';

describe('Alamin1Component', () => {
  let component: Alamin1Component;
  let fixture: ComponentFixture<Alamin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alamin1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alamin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
