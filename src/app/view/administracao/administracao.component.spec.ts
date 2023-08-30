import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministracaoComponent } from './administracao.component';
import { UsersComponent } from '../administracao/users/users.component';
import { ProdutosComponent } from '../administracao/produtos/produtos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdministracaoComponent', () => {
  let component: AdministracaoComponent;
  let fixture: ComponentFixture<AdministracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoComponent, UsersComponent, ProdutosComponent],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
