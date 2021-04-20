/* tslint:disable:typedef */
import {Component} from '@angular/core';
import {PostComponent} from './post/post.component';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisible = true;

  posts: Post[] = [
    {
      title: 'Хочу выучить Angular компоненты',
      text: 'Я все еще учу компоненты',
      id: 1,
    },
    {
      title: 'Следующий блок',
      text: 'Следующий блок будет про дерективы и пайпы',
      id: 2,
    },
    {
      title: 'Следующий блок',
      text: 'Следующий блок будет про дерективы и пайпы',
      id: 3,
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
