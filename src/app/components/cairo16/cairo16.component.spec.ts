import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo16Component } from './cairo16.component';

describe('Cairo16Component', () => {
  let component: Cairo16Component;
  let fixture: ComponentFixture<Cairo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
