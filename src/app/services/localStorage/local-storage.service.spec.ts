import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an item in local storage', () => {
    const key = 'testKey';
    const value = 'testValue';
    service.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
  });

  it('should get an item from local storage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, JSON.stringify(value));
    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toEqual(value);
  });

  it('should remove an item from local storage', () => {
    
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, JSON.stringify(value));
    service.removeItem(key);
    expect(localStorage.getItem(key)).toBeNull();
  });
});

