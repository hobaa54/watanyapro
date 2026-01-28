import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zayed2Component } from './zayed2.component';

describe('Zayed2Component', () => {
  let component: Zayed2Component;
  let fixture: ComponentFixture<Zayed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zayed2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zayed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
