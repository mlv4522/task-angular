import { Params, Router } from '@angular/router';
import { ProjectService, Project } from './../services/project.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-extra',
  templateUrl: './employee-extra.component.html',
  styleUrls: ['./employee-extra.component.css']
})
export class EmployeeExtraComponent implements OnInit {
  href = ''
  projects: Project[]
  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.href = this.router.url
    const id = this.href.substr(this.href.indexOf('/extra')-2, 2)
    this.projects = this.projectService.getByIdToProject(+id)
  }

}
