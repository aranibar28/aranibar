import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(value: string, file: string) {
    return `https://res.cloudinary.com/dm0fujtre/image/upload/v1661298275/portfolio/${file}/${value}`;
  }
}
