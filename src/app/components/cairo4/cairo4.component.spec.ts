import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo4Component } from './cairo4.component';

describe('Cairo4Component', () => {
  let component: Cairo4Component;
  let fixture: ComponentFixture<Cairo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
