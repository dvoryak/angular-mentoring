import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {CourseComponent} from './components/course/course.component';
import {SearchComponent} from './components/search/search.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        BreadcrumbComponent,
        CourseComponent,
        SearchComponent,
        HeaderComponent,
        FooterComponent,
        CoursePageComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mentoring'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-mentoring');
  });



  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mentoring'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain('angular-mentoring');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.content span')).nativeElement.textContent).toContain('Add course');
  });
});
