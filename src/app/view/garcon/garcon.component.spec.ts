import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GarconComponent } from './garcon.component';
import { ProductsComponent } from '../garcon/products/products.component';
import { PedidosComponent } from '../garcon/pedidos/pedidos.component';
import { FormsModule } from '@angular/forms';

describe('GarconComponent', () => {
  let component: GarconComponent;
  let fixture: ComponentFixture<GarconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarconComponent, ProductsComponent, PedidosComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(GarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('should call showBreakfast when "Café da Manhã" button is clicked', () => {
    spyOn(component, 'showBreakfast');
    const breakfastButton = fixture.nativeElement.querySelector('.submit:nth-child(1)');
    breakfastButton.click();
    expect(component.showBreakfast).toHaveBeenCalled();
  });

  it('should call showMainMenu when "Menu Principal" button is clicked', () => {
    spyOn(component, 'showMainMenu');
    const mainMenuButton = fixture.nativeElement.querySelector('.submit:nth-child(2)');
    mainMenuButton.click();
    expect(component.showMainMenu).toHaveBeenCalled();
  });
});
