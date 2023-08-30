import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderComponent } from './order.component';
import { FormsModule } from '@angular/forms';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display order details', () => {
    const mockOrders = [
      { id: 1, dataEntry: new Date(), client: 'John', mesa: 2, products: [], status: 'pending' },
    ];

    component.orders = mockOrders;
    fixture.detectChanges();

    const orderElements = fixture.nativeElement.querySelectorAll('.conteiner-order');
    expect(orderElements.length).toBe(mockOrders.length);
  });

  it('should update order status', fakeAsync(() => {
    const mockOrder = { id: 1, dataEntry: new Date(), client: 'John', mesa: 2, products: [], status: 'pending' };
    component.orders = [mockOrder];
    fixture.detectChanges();

    const selectElement = fixture.nativeElement.querySelector('select');
    selectElement.value = 'delivered';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const updateButton = fixture.nativeElement.querySelector('button');
    updateButton.click();
    fixture.detectChanges();
    tick();

    expect(component.orders[0].status).toBe('delivered');
  }));

  it('should calculate elapsed time for pending orders', () => {
    const mockOrder = { id: 1, dataEntry: new Date(Date.now() - 5000), client: 'John', mesa: 2, products: [], status: 'pending' };
    component.orders = [mockOrder];
    fixture.detectChanges();

    component.updateElapsedTime(component.orders[0]);

    expect(component.orders[0].tiempoPedido).toContain('0h 0m 5s');
  });

  it('should update elapsed time continuously for pending orders', fakeAsync(() => {
    const mockOrder = { id: 1, dataEntry: new Date(Date.now() - 5000), client: 'John', mesa: 2, products: [], status: 'pending' };
    component.orders = [mockOrder];
    fixture.detectChanges();

    component.startElapsedTimeUpdate(component.orders[0]);

    tick(2000);
    fixture.detectChanges();

    expect(component.orders[0].tiempoPedido).toContain('0h 0m 7s');


    component.stopElapsedTimeUpdate();
    tick(2000);
    fixture.detectChanges();

    expect(component.orders[0].tiempoPedido).toContain('0h 0m 7s');
  }));
});

