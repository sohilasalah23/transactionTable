import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../interface/customer.js';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], term:string): any[] {
    const users =  value.filter((user)=>user.name.toLowerCase().includes(term.toLowerCase())) ;
    return  users
  }

}
