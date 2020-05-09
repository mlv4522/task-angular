import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor(public employeesService: EmployeesService,
              private projectService: ProjectService,
              public dialog: MatDialog) { }
  
  delEmployee(id: number) {
    if (this.projectService.getByIdToProject(id).length) {
      const dialogRef = this.dialog.open(DialogContentComponent, { width: '350px',
        data: {title: 'Внимание!', 
               text: 'Нельзя удалить сотрудника,так как за ним закреплены проекты.'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed, result: ', result);
      });
    } else {
        this.employeesService.delById(id)
    }
  }

}
