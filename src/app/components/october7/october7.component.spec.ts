import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October7Component } from './october7.component';

describe('October7Component', () => {
  let component: October7Component;
  let fixture: ComponentFixture<October7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
