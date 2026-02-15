import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alamin3Component } from './alamin3.component';

describe('Alamin3Component', () => {
  let component: Alamin3Component;
  let fixture: ComponentFixture<Alamin3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alamin3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alamin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
