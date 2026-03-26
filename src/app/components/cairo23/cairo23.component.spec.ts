import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo23Component } from './cairo23.component';

describe('Cairo23Component', () => {
  let component: Cairo23Component;
  let fixture: ComponentFixture<Cairo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
