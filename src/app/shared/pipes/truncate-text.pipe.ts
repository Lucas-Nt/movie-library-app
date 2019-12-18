import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, characterLimit: number): any {
    if (!value) {
      return;
    }

    const isHeigherThanLimit = value.length > characterLimit;

    return isHeigherThanLimit
           ? value.substring(0, characterLimit) + '...'
           : value;
  }

}
