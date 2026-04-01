import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrouh4Component } from './matrouh4.component';

describe('Matrouh4Component', () => {
  let component: Matrouh4Component;
  let fixture: ComponentFixture<Matrouh4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matrouh4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Matrouh4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
