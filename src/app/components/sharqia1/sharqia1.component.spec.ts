import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharqia1Component } from './sharqia1.component';

describe('Sharqia1Component', () => {
  let component: Sharqia1Component;
  let fixture: ComponentFixture<Sharqia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sharqia1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sharqia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
