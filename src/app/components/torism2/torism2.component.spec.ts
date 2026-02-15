import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torism2Component } from './torism2.component';

describe('Torism2Component', () => {
  let component: Torism2Component;
  let fixture: ComponentFixture<Torism2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Torism2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Torism2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
