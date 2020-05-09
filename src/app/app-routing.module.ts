import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CreateEmployeeComponent } from './createEmployee/createEmployee.component';
import { CreateProjectComponent } from './createProject/createProject.component';
import { EmployeeExtraComponent } from './employee-extra/employee-extra.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employee/:id', component: EmployeeComponent, children: [
         {path: 'extra', component: EmployeeExtraComponent}
  ]},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'project/:id', component: ProjectComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
