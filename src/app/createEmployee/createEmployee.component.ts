import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService, Employee } from '../services/employees.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-createEmployee',
  templateUrl: './createEmployee.component.html',
  styleUrls: ['./createEmployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee
  lastName = ''
  firstName = ''
  middleName = ''
  birthday: any = ''
  id: number
  idProject?: number[] = []
  title = ''

  form: FormGroup

  constructor(private employeesService: EmployeesService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {

      this.title = 'Новый сотрудник'
      if (params.id) {
        const employee: Employee = this.employee = this.employeesService.getById(+params.id)

        if (employee.lastName !== 'error') {
          this.title = 'Редактирование сотрудника'
          this.lastName = employee.lastName
          this.firstName = employee.firstName
          this.middleName = employee.middleName
          this.birthday = new Date(employee.birthday)
          this.id = employee.id 
          this.idProject = employee.idProject
        }
      }

    })
    this.form = new FormGroup({
      lastName: new FormControl(this.lastName, [Validators.required]),
      firstName: new FormControl(this.firstName, [Validators.required]),
      middleName: new FormControl(this.middleName, [Validators.required]),
      birthday: new FormControl(this.birthday, [Validators.required]),
    })
  }

  submit() {
    if (this.form.invalid) { return }

    let formData = { ...this.form.value }
    if (this.id) {
      formData.id = this.id
      formData.idProject = this.idProject

      this.employeesService.editEmployee(this.employee, formData)
    } else {
      formData.id = Math.trunc(Math.random() * 100000)
      formData.idProject = []
      this.employeesService.addEmployee(formData)
    }
    this.router.navigate(['/employees'])
  }

}
