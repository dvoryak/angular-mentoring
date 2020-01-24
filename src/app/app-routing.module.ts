import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {AddCoursePageComponent} from './components/add-course-page/add-course-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      breadcrumb: 'Login'
    }
  },
  {
    path: 'courses',
    component: CoursePageComponent,
    data: {
      breadcrumb: 'Courses'
    }
  },
  {
    path: 'create-course',
    component: AddCoursePageComponent,
    data: {
      breadcrumb: 'Create'
    }
  },
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
