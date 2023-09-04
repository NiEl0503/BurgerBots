import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should not show logout button when user is not authenticated', () => {
    localStorage.removeItem('accessToken');
    fixture.detectChanges();

    const logoutButton = fixture.nativeElement.querySelector('.logout-button');
    expect(logoutButton).toBeFalsy();
  });

  it('should navigate to home page and clear local storage on logout', () => {
    localStorage.setItem('accessToken', 'example-token');
    component.logout();
    expect(localStorage.getItem('accessToken')).toBeNull();
    expect(localStorage.getItem('user_data')).toBeNull();
  });
});
