import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo24Component } from './cairo24.component';

describe('Cairo24Component', () => {
  let component: Cairo24Component;
  let fixture: ComponentFixture<Cairo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
