import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {DebugElement} from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('footer should contain <p> with "Videocourses" text', () => {
    const footerDe: DebugElement = fixture.debugElement;
    const footerElement: HTMLElement = footerDe.nativeElement;
    // const footerElement: HTMLElement = fixture.nativeElement;
    const p = footerElement.querySelector('p');
    expect(p.textContent).toContain('Videocourses');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
