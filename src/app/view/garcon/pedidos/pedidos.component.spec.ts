import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosComponent],
      imports: [FormsModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pedidosProntos correctly', () => {
    const mockPedidosProntos = [{ id: 1, client: 'Client 1', mesa: 1, status: 'delivered' }];
    localStorage.setItem('pedidosProntos', JSON.stringify(mockPedidosProntos));
    
    component.ngOnInit();

    expect(component.pedidosProntos).toEqual(mockPedidosProntos);
  });

  it('should move selected pedidos to pedidosEntregues', () => {
    component.pedidosProntos = [
      { id: 1, client: 'Client 1', mesa: 1, selected: true },
      { id: 2, client: 'Client 2', mesa: 2, selected: false }
    ];

    component.moverPedidosEntregues();

    expect(component.pedidosProntos.length).toBe(1);
    expect(component.pedidosProntos[0].selected).toBeFalsy();

    expect(component.pedidosEntregues.length).toBe(1);
    expect(component.pedidosEntregues[0].id).toBe(1);
  });
});
