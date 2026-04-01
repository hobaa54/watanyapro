import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gharbia2Component } from './gharbia2.component';

describe('Gharbia2Component', () => {
  let component: Gharbia2Component;
  let fixture: ComponentFixture<Gharbia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gharbia2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gharbia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
