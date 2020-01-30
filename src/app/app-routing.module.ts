import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {AddCoursePageComponent} from './components/add-course-page/add-course-page.component';
import {EditCourseComponent} from './components/edit-course/edit-course.component';
import {AuthorizationGuard} from './core/guards/authorization.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses',
    component: CoursePageComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'create-course',
    component: AddCoursePageComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'edit-course/:id',
    component: EditCourseComponent,
    canActivate: [AuthorizationGuard]
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
