import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  searchStr = ''
  
  constructor(public projectService: ProjectService, 
              public dialog: MatDialog) { }

  delProject(id: number) {
    if (this.projectService.getById(id).idEmployee.length) {
    const dialogRef = this.dialog.open(DialogContentComponent, { width: '350px',
      data: {title: 'Внимание!', 
             text: 'Нельзя удалить проект,так как за ним закреплены пользователи.'}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed, result: ', result);
    });
    } else {
      this.projectService.delById(id)
    }
  }

}
