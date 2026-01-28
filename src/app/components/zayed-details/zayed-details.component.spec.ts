import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayedDetailsComponent } from './zayed-details.component';

describe('ZayedDetailsComponent', () => {
  let component: ZayedDetailsComponent;
  let fixture: ComponentFixture<ZayedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZayedDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZayedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
