import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo22Component } from './cairo22.component';

describe('Cairo22Component', () => {
  let component: Cairo22Component;
  let fixture: ComponentFixture<Cairo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
