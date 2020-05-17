import { Employee } from './../services/employees.service';
import { Pipe, PipeTransform } from "@angular/core";
import { Project } from '../services/project.service';

@Pipe({ name: 'search' }) 
export class SearchPipe implements PipeTransform {
    transform(arrSearch: Array<any>, search = ''): Array<any> {
        if (!search.trim()) { return arrSearch }

        return arrSearch.filter( elem => {
            return elem.nameOfProdject ? 
                elem.nameOfProdject.toLowerCase().includes(search.toLowerCase()) 
                    : elem.lastName.toLowerCase().includes(search.toLowerCase()) })
        }
}