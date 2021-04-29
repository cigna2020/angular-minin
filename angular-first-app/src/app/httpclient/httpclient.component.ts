import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(response => {
      this.todosList = response;
    });
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
}
