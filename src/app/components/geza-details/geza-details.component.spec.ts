import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezaDetailsComponent } from './geza-details.component';

describe('GezaDetailsComponent', () => {
  let component: GezaDetailsComponent;
  let fixture: ComponentFixture<GezaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GezaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
