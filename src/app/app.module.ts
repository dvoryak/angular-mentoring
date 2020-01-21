import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CourseComponent } from './components/course/course.component';
import {FormsModule} from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CourseBorderDirective } from './directives/course-border.directive';
import {SearchComponent} from './components/search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalConfirmComponent } from './shared/modal-confirm/modal-confirm.component';

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
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
