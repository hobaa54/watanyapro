import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo25Component } from './cairo25.component';

describe('Cairo25Component', () => {
  let component: Cairo25Component;
  let fixture: ComponentFixture<Cairo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
