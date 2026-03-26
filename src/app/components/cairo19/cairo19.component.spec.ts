import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo19Component } from './cairo19.component';

describe('Cairo19Component', () => {
  let component: Cairo19Component;
  let fixture: ComponentFixture<Cairo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
