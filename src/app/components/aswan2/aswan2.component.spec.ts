import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aswan2Component } from './aswan2.component';

describe('Aswan2Component', () => {
  let component: Aswan2Component;
  let fixture: ComponentFixture<Aswan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aswan2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aswan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
