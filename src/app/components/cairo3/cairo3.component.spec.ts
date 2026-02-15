import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo3Component } from './cairo3.component';

describe('Cairo3Component', () => {
  let component: Cairo3Component;
  let fixture: ComponentFixture<Cairo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
