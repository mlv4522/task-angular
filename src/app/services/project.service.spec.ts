import { ProjectService, Project } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService
  let project: Project
  beforeEach( ()=> { 
    service = new  ProjectService() 
    project = {nameOfProdject: 'Oracle', id: 55, idEmployee:[12, 13, 14]}
    service.projects.push({nameOfProdject: 'Oracle', id: 55, idEmployee:[12, 13, 14]})
    service.projects.push({nameOfProdject: 'Linux', id: 77, idEmployee: [11, 13]})
  })

  it('the projects should be defined', () => { 
    expect(service.projects).toBeDefined })

  it('should get an amployee for getById Ok', () => { 
    expect(service.getById(55)).toEqual(project) })
  
  it('should get Error for getById', () => { 
    expect(service.getById(56)).toEqual({nameOfProdject: 'error', id: 66, idEmployee: []}) })
  
   it('should get array for getByIdToProject', () => { 
    const armArr = [project] 
    expect(service.getByIdToProject(14)).toEqual(armArr) 
  })

  it('should eddit an employee for editProject', () => { 
    const empEditOld: Project = {nameOfProdject: 'Linux', id: 77, idEmployee: [11, 13]}
    const empEditNew: Project = {nameOfProdject: 'Linux', id: 77, idEmployee: [11]}
    service.editProject(empEditOld, empEditNew)
    expect(service.projects).toContain(empEditNew)
    expect(service.projects).not.toContain(empEditOld)
   })

  
  it('should dellete an employee for delById ok', () => { 
    const len = service.projects.length
    service.delById(55)
    expect(service.projects.length).toBeLessThan(len)
   })

   it('should dellete an employee for delById ok_2', () => { 
    const len = service.projects.length
    service.delById(55)
    expect(service.projects).not.toContain(project)
   })


   it('should add an employee for addProject ok', () => { 
     const len = service.projects.length
     const projectNew: Project = {nameOfProdject: 'Win', id: 7777, idEmployee:[]}
     service.addProject(projectNew)
     expect(service.projects.length).toBeGreaterThan(len)
     expect(service.projects).toContain(projectNew)
   })

})

