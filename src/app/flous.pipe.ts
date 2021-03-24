import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flous'
})
export class FlousPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return "this is my price : " + value + " $";
  }

}
