import { EmployeesService } from './../services/employees.service';
import { ProjectService } from './../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectComponent } from './createProject.component'


describe('CreateProjectComponent', () => {
    let createProject: CreateProjectComponent
    beforeEach(() => {
        console.log('Ok 1')
        createProject = new CreateProjectComponent(new ActivatedRoute(), null, null, null, )
        // createProject = new CreateProjectComponent(new ActivatedRoute(),
        //     new Router(null, null, null, null, null, null, null, null),
        //     new ProjectService(), new EmployeesService())
        console.log('Ok 2')
    })

    // it('the title should be defined', () => { 
    //     console.log('createPoject: ', createProject.title)
    //     expect(createProject.title).toBeDefined })

    it('should create form with 2 controls', () => {
        createProject.ngOnInit()
        expect(createProject.form.contains('nameOfProdject')).toBeTruthy()
        expect(createProject.form.contains('idEmployee')).toBeTruthy()
    })



})