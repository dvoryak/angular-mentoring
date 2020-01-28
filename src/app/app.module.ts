import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CourseComponent } from './components/course/course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './components/search/search.component';
import { ModalConfirmComponent } from './shared/modal-confirm/modal-confirm.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {CourseBorderDirective} from './directives/course-border.directive';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursePageComponent,
    BreadcrumbComponent,
    CourseComponent,
    SearchComponent,
    DurationPipe,
    OrderByPipe,
    CourseBorderDirective,
    FilterPipe,
    ModalConfirmComponent,
    LoginPageComponent,
    AddCoursePageComponent,
    CourseFormComponent,
    NotFoundComponent,
    FilterPipe,
    ModalConfirmComponent,
    LoginPageComponent,
    AddCoursePageComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
