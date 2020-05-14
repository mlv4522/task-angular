import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'search' }) 
export class SearchPipe implements PipeTransform {
    transform(arrSearch: any, search = ''): any {
        if (!search.trim()) { return arrSearch }

        return arrSearch.filter( elem => {
            return elem.nameOfProdject ? 
                elem.nameOfProdject.toLowerCase().includes(search.toLowerCase()) 
                    : elem.lastName.toLowerCase().includes(search.toLowerCase()) })
        }
}