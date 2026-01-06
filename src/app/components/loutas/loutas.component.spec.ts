import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoutasComponent } from './loutas.component';

describe('LoutasComponent', () => {
  let component: LoutasComponent;
  let fixture: ComponentFixture<LoutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
