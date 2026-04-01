import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GharbiaDetailsComponent } from './gharbia-details.component';

describe('GharbiaDetailsComponent', () => {
  let component: GharbiaDetailsComponent;
  let fixture: ComponentFixture<GharbiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GharbiaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GharbiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
