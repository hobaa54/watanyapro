import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torism1Component } from './torism1.component';

describe('Torism1Component', () => {
  let component: Torism1Component;
  let fixture: ComponentFixture<Torism1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Torism1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Torism1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
