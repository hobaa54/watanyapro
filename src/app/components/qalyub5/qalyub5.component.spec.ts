import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub5Component } from './qalyub5.component';

describe('Qalyub5Component', () => {
  let component: Qalyub5Component;
  let fixture: ComponentFixture<Qalyub5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
