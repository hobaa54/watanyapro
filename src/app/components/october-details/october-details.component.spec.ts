import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberDetailsComponent } from './october-details.component';

describe('OctoberDetailsComponent', () => {
  let component: OctoberDetailsComponent;
  let fixture: ComponentFixture<OctoberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoberDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OctoberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
