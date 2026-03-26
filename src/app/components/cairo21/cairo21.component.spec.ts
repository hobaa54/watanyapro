import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo21Component } from './cairo21.component';

describe('Cairo21Component', () => {
  let component: Cairo21Component;
  let fixture: ComponentFixture<Cairo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
