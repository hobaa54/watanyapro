import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obour2Component } from './obour2.component';

describe('Obour2Component', () => {
  let component: Obour2Component;
  let fixture: ComponentFixture<Obour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obour2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Obour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
