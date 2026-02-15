import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giza3Component } from './giza3.component';

describe('Giza3Component', () => {
  let component: Giza3Component;
  let fixture: ComponentFixture<Giza3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giza3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Giza3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
