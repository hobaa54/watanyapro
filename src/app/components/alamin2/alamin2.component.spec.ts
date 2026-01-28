import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alamin2Component } from './alamin2.component';

describe('Alamin2Component', () => {
  let component: Alamin2Component;
  let fixture: ComponentFixture<Alamin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alamin2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alamin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
