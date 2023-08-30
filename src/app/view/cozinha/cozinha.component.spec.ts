import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CozinhaComponent } from './cozinha.component';
import { OrderComponent } from '../cozinha/order/order.component';

describe('CozinhaComponent', () => {
  let component: CozinhaComponent;
  let fixture: ComponentFixture<CozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CozinhaComponent, OrderComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

