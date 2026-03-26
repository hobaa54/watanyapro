import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub2Component } from './qalyub2.component';

describe('Qalyub2Component', () => {
  let component: Qalyub2Component;
  let fixture: ComponentFixture<Qalyub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
