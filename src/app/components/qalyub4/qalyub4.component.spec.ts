import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub4Component } from './qalyub4.component';

describe('Qalyub4Component', () => {
  let component: Qalyub4Component;
  let fixture: ComponentFixture<Qalyub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
