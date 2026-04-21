import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafrDetailsComponent } from './kafr-details.component';

describe('KafrDetailsComponent', () => {
  let component: KafrDetailsComponent;
  let fixture: ComponentFixture<KafrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafrDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
