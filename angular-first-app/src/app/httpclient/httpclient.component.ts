import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  todosList: Todo[] = [];

  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.toFetch();
  }

  addTitle(): void {
    if (this.todoTitle.trim()) {
      const newTodo: Todo = {
        title: this.todoTitle,
        completed: false
      };
      this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
        .subscribe(todo => this.todosList.push(todo));
      this.todoTitle = '';
    }
  }

  toFetch(): void {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todosList = response;
        this.loading = false;
      });
  }

  deleteTodo(id: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(todo => this.todosList = this.todosList.filter(t => t.id !== id));
  }
}
