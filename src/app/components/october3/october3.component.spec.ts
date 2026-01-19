import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October3Component } from './october3.component';

describe('October3Component', () => {
  let component: October3Component;
  let fixture: ComponentFixture<October3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(October3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
