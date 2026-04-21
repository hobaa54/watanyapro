import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portsaid1Component } from './portsaid1.component';

describe('Portsaid1Component', () => {
  let component: Portsaid1Component;
  let fixture: ComponentFixture<Portsaid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portsaid1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Portsaid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
