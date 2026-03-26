import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo30Component } from './cairo30.component';

describe('Cairo30Component', () => {
  let component: Cairo30Component;
  let fixture: ComponentFixture<Cairo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo30Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
