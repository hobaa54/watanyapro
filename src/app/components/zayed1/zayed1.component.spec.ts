import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zayed1Component } from './zayed1.component';

describe('Zayed1Component', () => {
  let component: Zayed1Component;
  let fixture: ComponentFixture<Zayed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zayed1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zayed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
