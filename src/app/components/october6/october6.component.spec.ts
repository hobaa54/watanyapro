import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October6Component } from './october6.component';

describe('October6Component', () => {
  let component: October6Component;
  let fixture: ComponentFixture<October6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
