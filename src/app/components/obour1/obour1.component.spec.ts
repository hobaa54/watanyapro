import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obour1Component } from './obour1.component';

describe('Obour1Component', () => {
  let component: Obour1Component;
  let fixture: ComponentFixture<Obour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obour1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Obour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
