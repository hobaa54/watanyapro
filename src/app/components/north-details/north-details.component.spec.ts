import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthDetailsComponent } from './north-details.component';

describe('NorthDetailsComponent', () => {
  let component: NorthDetailsComponent;
  let fixture: ComponentFixture<NorthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
