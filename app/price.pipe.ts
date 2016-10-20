import {Pipe, PipeTransform} from '@angular/core';
import { Cd } from './cd.model';

@Pipe({
  name: "price",
  pure: true
})

export class PricePipe implements PipeTransform {
  transform(input: Cd [], desiredSort: string) {
    if (desiredSort ===  "Low to High") {
      input = this.sortByKeyAscending(input,"price");
    }else if(desiredSort === "High to Low"){
      input = this.sortByKeyDecending(input,"price");
    }
    return input;
  }

  sortByKeyAscending(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
  }
  sortByKeyDecending(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      });
  }
}
