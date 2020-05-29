import { Injectable } from '@angular/core';

export interface Employee {
  lastName: string
  firstName: string
  middleName: string
  birthday: any
  id: number
  idProject?: number[]
}

@Injectable({ providedIn: 'root' })
export class EmployeesService {

  employees: Employee[] = JSON.parse(localStorage.getItem('employees')) || 
  [
    {lastName: 'Серенко', firstName: 'Иван', middleName: 'Дмитриевич', 
      birthday: '1990-01-05 00:00:00.0', id: 11, idProject: []},
    {lastName: 'Пашко', firstName: 'Олег', middleName: 'Владимирович', 
      birthday: '1994-11-06 00:00:00.0', id: 12, idProject: []},
    {lastName: 'Петренко', firstName: 'Наталия', middleName: 'Леонидовна', 
      birthday: '2000-01-20 00:00:00.0', id: 13, idProject: []},
    {lastName: 'Смирный', firstName: 'Александр', middleName: 'Иванович', 
      birthday: '1996-05-12 00:00:00.0', id: 14, idProject: []},
    {lastName: 'Калита', firstName: 'Ирина', middleName: 'Валентиновна', 
      birthday: '2000-11-17 00:00:00.0', id: 15, idProject: []}
  ]

  getById(id: number){
    return this.employees.find(emp => emp.id === id) ||
    {lastName: 'error', firstName: 'error', middleName: 'error', 
      birthday: '01.01.2000', id: 666, idProject: []}
  }

  delById(id: number){
    this.employees = this.employees.filter(emp => emp.id !== id)
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }


  editEmployee(empOld: Employee, empNew: Employee) {
    this.employees.splice(this.employees.indexOf(empOld), 1, empNew)
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
  
  getByIdToProject(idArr: number[]){
    return this.employees.filter(emp => idArr.includes(emp.id))
  }
 
  getAllEmployees(){
    return this.employees
  }
 
}
