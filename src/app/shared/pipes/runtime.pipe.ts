import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'runtime' })
export class RuntimePipe implements PipeTransform {
  transform(movieDuration: number): string {
    if (!movieDuration) {
      return;
    }

    const hours = Math.floor(movieDuration / 60);
    const minutes = movieDuration % 60;

    return `${hours}h ${minutes}min`;
  }
}
