import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo17Component } from './cairo17.component';

describe('Cairo17Component', () => {
  let component: Cairo17Component;
  let fixture: ComponentFixture<Cairo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
