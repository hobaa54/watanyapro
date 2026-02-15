import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorismComponent } from './torism.component';

describe('TorismComponent', () => {
  let component: TorismComponent;
  let fixture: ComponentFixture<TorismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
