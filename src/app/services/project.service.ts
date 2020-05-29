import { Injectable } from '@angular/core';

export interface Project {
  nameOfProdject: string
  id: number
  idEmployee?: number[]
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

  projects: Project[] = JSON.parse(localStorage.getItem('projects')) || [
    {nameOfProdject: 'Angular', id: 11, idEmployee:[12, 13]},
    {nameOfProdject: 'Java', id: 12, idEmployee: [11, 12, 13]},
    {nameOfProdject: 'Vew', id: 13, idEmployee: []},
    {nameOfProdject: 'JavaScript', id: 14, idEmployee: [13]},
  ]

  getById(id: number){
    return this.projects.find(p => p.id === id) || 
      {nameOfProdject: 'error', id: 66, idEmployee: []}
  }

  delById(id: number){
    this.projects = this.projects.filter(p => p.id !== id)
    localStorage.setItem('projects', JSON.stringify(this.projects));    
  }

  addProject(project: Project) {
    this.projects.push(project)
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  editProject(pOld: Project, pNew: Project) {
    this.projects.splice(this.projects.indexOf(pOld), 1, pNew)
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  getByIdToProject(id: number){
    return this.projects.filter(p => p.idEmployee.includes(id))
  }
}
