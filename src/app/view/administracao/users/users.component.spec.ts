import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [UsersService, LocalStorageService],
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users', () => {
    const mockUsers = [{ id: 1, email: 'user1@example.com', role: 'user' }, { id: 2, email: 'user2@example.com', role: 'admin' }];
    spyOn(component['userService'], 'getusers').and.returnValue(of(mockUsers));
    
    component.ngOnInit();
    
    expect(component.users).toEqual(mockUsers);
  });

  it('should delete a user', () => {
    const userToDelete = { id: 1, email: 'user1@example.com', role: 'user' };
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(component['userService'], 'deleteUser').and.returnValue(of({}));
    spyOn(component, 'loadUsers');
    
    component.deleteUsers(userToDelete);
    
    expect(component['userService'].deleteUser).toHaveBeenCalledWith(userToDelete.id);
    expect(component.loadUsers).toHaveBeenCalled();
  });

  it('should add a user', () => {
    const newUser = { email: 'newuser@example.com', password: 'password123', role: 'user' };
    spyOn(component['userService'], 'addUser').and.returnValue(of({}));
    spyOn(component, 'loadUsers');
    
    component.newUser = newUser;
    component.addUsers();
    
    expect(component['userService'].addUser).toHaveBeenCalledWith(newUser);
    expect(component.loadUsers).toHaveBeenCalled();
    expect(component.newUser).toEqual({ email: '', password: '', role: '' });
  });

  it('should edit a user', () => {
    const userToEdit = { id: 1, email: 'user1@example.com', role: 'user' };
    spyOn(component, 'loadUsers');
    
    component.editUsers(userToEdit);
    
    expect(component.editMode).toBe(true);
    expect(component.newUser).toEqual(userToEdit);
  });

  it('should save edited user', () => {
    const editedUser = { id: 1, email: 'editeduser@example.com', role: 'admin' };
    spyOn(component['userService'], 'updateUser').and.returnValue(of({}));
    spyOn(component, 'loadUsers');
    
    component.newUser = editedUser;
    component.saveEdit();
    
    expect(component['userService'].updateUser).toHaveBeenCalledWith(editedUser);
    expect(component.loadUsers).toHaveBeenCalled();
    expect(component.newUser).toEqual({ email: '', password: '', role: '' });
    expect(component.editMode).toBe(false);
  });
});
