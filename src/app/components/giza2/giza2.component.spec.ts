import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giza2Component } from './giza2.component';

describe('Giza2Component', () => {
  let component: Giza2Component;
  let fixture: ComponentFixture<Giza2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giza2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Giza2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
