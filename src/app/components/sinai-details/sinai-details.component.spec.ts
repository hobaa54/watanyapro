import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaiDetailsComponent } from './sinai-details.component';

describe('SinaiDetailsComponent', () => {
  let component: SinaiDetailsComponent;
  let fixture: ComponentFixture<SinaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinaiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
