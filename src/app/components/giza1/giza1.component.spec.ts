import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giza1Component } from './giza1.component';

describe('Giza1Component', () => {
  let component: Giza1Component;
  let fixture: ComponentFixture<Giza1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giza1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Giza1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
