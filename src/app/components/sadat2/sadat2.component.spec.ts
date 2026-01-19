import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sadat2Component } from './sadat2.component';

describe('Sadat2Component', () => {
  let component: Sadat2Component;
  let fixture: ComponentFixture<Sadat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sadat2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sadat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
