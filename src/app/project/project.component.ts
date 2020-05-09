import { EmployeesService, Employee } from '../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService, Project } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project
  employees: Employee[]
  constructor(private route: ActivatedRoute, 
    private projectService: ProjectService, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.project = this.projectService.getById(+params.id)
      this.employees = this.employeesService.getByIdToProject(this.project.idEmployee)
    })
  }

}
