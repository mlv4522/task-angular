import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService, Employee } from '../services/employees.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project, ProjectService } from '../services/project.service';

@Component({
  selector: 'app-createProject',
  templateUrl: './createProject.component.html',
  styleUrls: ['./createProject.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: Project
  employees: Employee[] = []
  nameOfProdject = ''
  id: number
  idEmployee?: any
  title = ''

  form: FormGroup

  constructor(private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.title = 'Новый проект'
      const employees: Employee[] = this.employees = this.employeesService.getAllEmployees()
      if (params.id) {
        this.title = 'Редактирование проекта'
        const project: Project = this.project = this.projectService.getById(+params.id)
        if (project.nameOfProdject !== 'error') {
          this.nameOfProdject = project.nameOfProdject
          this.id = project.id
          this.idEmployee = project.idEmployee
        }
      }
    })

    this.form = new FormGroup({
      nameOfProdject: new FormControl(this.nameOfProdject, [Validators.required]),
      idEmployee: new FormControl(this.idEmployee)
    })
  }

  submit() {
    if (this.form.invalid) { return }
    
    let formData = { ...this.form.value }
    if (this.id) {
      formData.id = this.id
      this.projectService.editProject(this.project, formData)
    } else {
      formData.id = Math.trunc(Math.random() * 100000)
      this.projectService.eddProject(formData)
    }

    this.router.navigate(['/projects'])
  }
}
