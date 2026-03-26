import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo11Component } from './cairo11.component';

describe('Cairo11Component', () => {
  let component: Cairo11Component;
  let fixture: ComponentFixture<Cairo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
