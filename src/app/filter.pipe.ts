import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(items: any, term: any): any {
  //   // check if search is undefined
  //   if ( term === undefined) { return items; }
  //   // return updated array
  //   return items.filter(function(item){
  //     return item.title.toLowerCase().includes(term.toLowerCase());
  //   });
  // }
  transform(items: any[], term: any): any {

            return items.filter(item => {
               for (let key in item ) {
                 if (( " " + item[key]).includes(term)) {
                    return true;
                 }
               }
               return false;
            });
        }

}
