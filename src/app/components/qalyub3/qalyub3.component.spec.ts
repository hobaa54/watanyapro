import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qalyub3Component } from './qalyub3.component';

describe('Qalyub3Component', () => {
  let component: Qalyub3Component;
  let fixture: ComponentFixture<Qalyub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qalyub3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Qalyub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
