import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yearOnly' })
export class YearOnlyPipe implements PipeTransform {
  transform(date: string): string {
    if (!date) {
      return;
    }

    const year = date.split('-')[0];

    return `( ${year} )`;
  }
}
