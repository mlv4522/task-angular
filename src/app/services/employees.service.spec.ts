import { EmployeesService, Employee } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService
  let emp: Employee
  beforeEach( ()=> { 
    service = new  EmployeesService() 
    emp = {lastName: 'Ивченко', firstName: 'Олег', middleName: 'Дмитриевич', 
      birthday: '1994-10-07 00:00:00.0', id: 21, idProject: []}
    service.employees.push({lastName: 'Ивченко', firstName: 'Олег', middleName: 'Дмитриевич', 
    birthday: '1994-10-07 00:00:00.0', id: 21, idProject: []})
    service.employees.push({lastName: 'Замула', firstName: 'Ирина', middleName: 'Владимирович', 
      birthday: '1991-11-07 00:00:00.0', id: 22, idProject: []})
  })

  it('the employees should be defined', () => { 
    expect(service.employees).toBeDefined })

  it('should get an employee for getById Ok', () => { 
    expect(service.getById(21)).toEqual(emp) })
  
  it('should get Error for getById', () => { 
    expect(service.getById(56)).toEqual({lastName: 'error', firstName: 'error', middleName: 'error', birthday: '01.01.2000', id: 666, idProject: []}) })
  
   it('should get all employees', () => { 
    const len = service.employees.length
    expect(service.getAllEmployees().length).toBe(len) 
  })

  it('should eddit an employee for editProject', () => { 
    const empEditOld: Employee = {lastName: 'Замула', firstName: 'Ирина', middleName: 'Владимирович', 
    birthday: '1991-11-07 00:00:00.0', id: 22, idProject: []}
    const empEditNew: Employee = {lastName: 'Замула', firstName: 'Наталия', middleName: 'Валериевна', 
    birthday: '1991-11-07 00:00:00.0', id: 22, idProject: []}
    service.editEmployee(empEditOld, empEditNew)
    expect(service.employees).toContain(empEditNew)
    expect(service.employees).not.toContain(empEditOld)
    expect(localStorage).toHaveBeenCalled

   })

  
  it('should dellete an employee for delById ok', () => { 
    const len = service.employees.length
    service.delById(21)
    expect(service.employees.length).toBeLessThan(len)
   })

   it('should dellete an employee for delById ok_2', () => { 
    const len = service.employees.length
    service.delById(21)
    expect(service.employees).not.toContain(emp)
   })


   it('should add an employee for addEmployee ok', () => { 
     const len = service.employees.length
     const empNew: Employee = {lastName: 'Завада', firstName: 'Виктория', middleName: 'Валериевна', 
     birthday: '1994-10-08 00:00:00.0', id: 24, idProject: []}
     service.addEmployee(empNew)
     expect(service.employees.length).toBeGreaterThan(len)
     expect(service.employees).toContain(empNew)
   })

})

