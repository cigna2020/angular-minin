import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1000));
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completedTodo(id: number): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
