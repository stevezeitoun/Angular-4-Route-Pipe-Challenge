import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = args;
    if (date) {
          return value.sort((a: any, b: any) => {
             let date1 = new Date(a.date);
             let date2 = new Date(b.date);

            if (date1 > date2) {
                return 1;
            } else if (date1 < date2) {
                return -1;
            } else {
                return 0;
            }
          });
         } else {
          return value.sort((a: any, b: any) => {
            const date1 = new Date(a.date);
            const date2 = new Date(b.date);

            if (date1 < date2) {
                return 1;
            } else if (date1 > date2) {
                return -1;
            } else {
                return 0;
            }
          });
        }
    }


}
