import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarconComponent } from './garcon.component';

describe('GarconComponent', () => {
  let component: GarconComponent;
  let fixture: ComponentFixture<GarconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarconComponent]
    });
    fixture = TestBed.createComponent(GarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
