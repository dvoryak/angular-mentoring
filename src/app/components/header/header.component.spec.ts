import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('click should change isLogged variable',  () => {
    expect(component.isLogged).toBe(false, 'off at first');
    component.onLogIn();
    expect(component.isLogged).toBe(true, 'in after click');
    component.onLogOff();
    expect(component.isLogged).toBe(false, 'off after second click');
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
