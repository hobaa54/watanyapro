import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub6Component } from './qalyub6.component';

describe('Qalyub6Component', () => {
  let component: Qalyub6Component;
  let fixture: ComponentFixture<Qalyub6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
