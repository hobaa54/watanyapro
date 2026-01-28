import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElshoroukDetailsComponent } from './elshorouk-details.component';

describe('ElshoroukDetailsComponent', () => {
  let component: ElshoroukDetailsComponent;
  let fixture: ComponentFixture<ElshoroukDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElshoroukDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElshoroukDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
