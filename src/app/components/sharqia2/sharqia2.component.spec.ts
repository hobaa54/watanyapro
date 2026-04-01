import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharqia2Component } from './sharqia2.component';

describe('Sharqia2Component', () => {
  let component: Sharqia2Component;
  let fixture: ComponentFixture<Sharqia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sharqia2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sharqia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
