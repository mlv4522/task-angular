import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeesService, Employee } from '../services/employees.service';
import { Project } from '../services/project.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : Employee
  projects : Project[]
  path = ''
  id: number
  constructor(private route: ActivatedRoute, private projectService: ProjectService,
    private router: Router, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.employee = this.employeesService.getById(+params.id)
      this.projects = this.projectService.getByIdToProject(+params.id)
      this.path = '/employee/' + params.id
      this.id = params.id
    })
  }

}
