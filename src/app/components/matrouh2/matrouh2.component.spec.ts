import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrouh2Component } from './matrouh2.component';

describe('Matrouh2Component', () => {
  let component: Matrouh2Component;
  let fixture: ComponentFixture<Matrouh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matrouh2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Matrouh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
