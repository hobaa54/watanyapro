import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo37Component } from './cairo37.component';

describe('Cairo37Component', () => {
  let component: Cairo37Component;
  let fixture: ComponentFixture<Cairo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo37Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
