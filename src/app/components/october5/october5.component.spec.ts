import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October5Component } from './october5.component';

describe('October5Component', () => {
  let component: October5Component;
  let fixture: ComponentFixture<October5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
