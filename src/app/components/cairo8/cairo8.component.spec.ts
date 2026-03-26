import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo8Component } from './cairo8.component';

describe('Cairo8Component', () => {
  let component: Cairo8Component;
  let fixture: ComponentFixture<Cairo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
