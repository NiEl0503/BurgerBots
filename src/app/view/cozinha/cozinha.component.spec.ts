import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaComponent } from './cozinha.component';

describe('CozinhaComponent', () => {
  let component: CozinhaComponent;
  let fixture: ComponentFixture<CozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CozinhaComponent]
    });
    fixture = TestBed.createComponent(CozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
