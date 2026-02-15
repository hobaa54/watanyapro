import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo5Component } from './cairo5.component';

describe('Cairo5Component', () => {
  let component: Cairo5Component;
  let fixture: ComponentFixture<Cairo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
