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
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {appReducers} from './core/+store/core.state';
import {metaReducers} from './root.store';
import {AuthStoreEffects} from './core/+store/effects/auth.effects';
import { DateInputComponent } from './components/course-form/date-input/date-input.component';
import { DurationInputComponent } from './components/course-form/duration-input/duration-input.component';
import { AuthorsInputComponent } from './components/course-form/authors-input/authors-input.component';

const APP_EFFECTS = [
  AuthStoreEffects,
];

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
    CourseFormComponent,
    EditCourseComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot(APP_EFFECTS),
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),

  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
