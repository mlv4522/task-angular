import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CreateEmployeeComponent } from './createEmployee/createEmployee.component';
import { CreateProjectComponent } from './createProject/createProject.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeExtraComponent } from './employee-extra/employee-extra.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      EmployeesComponent,
      ProjectComponent,
      ProjectsComponent,
      AboutComponent,
      ErrorComponent,
      CreateEmployeeComponent,
      CreateProjectComponent,
      HomeComponent,
      EmployeeExtraComponent,
      DialogContentComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 BrowserAnimationsModule,
	 MaterialModule,
	 FormsModule,
	 ReactiveFormsModule,
	 MatSelectModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
