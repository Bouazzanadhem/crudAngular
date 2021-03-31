import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], Searchtext: any): any {
    if (Searchtext) {
       return array.filter((x: any) => x.Name.toLowerCase().includes(Searchtext.toLowerCase()) || x.Discription.toLowerCase().includes(Searchtext.toLowerCase()));
     } else {
       return array;
     }
    }
}
