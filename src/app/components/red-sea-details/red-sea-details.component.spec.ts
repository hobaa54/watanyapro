import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSeaDetailsComponent } from './red-sea-details.component';

describe('RedSeaDetailsComponent', () => {
  let component: RedSeaDetailsComponent;
  let fixture: ComponentFixture<RedSeaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedSeaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedSeaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
