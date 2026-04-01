import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharqiaDetailsComponent } from './sharqia-details.component';

describe('SharqiaDetailsComponent', () => {
  let component: SharqiaDetailsComponent;
  let fixture: ComponentFixture<SharqiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharqiaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharqiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
