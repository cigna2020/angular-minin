import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], filter: string = ''): Post[] {
    if (!filter.trim()) {
      return posts;
    } else {
      return posts.filter(post => {
        return post.title.includes(filter);
      });
    }
  }

}
