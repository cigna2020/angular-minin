import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {HttpService, Todo} from './http.service';


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  todosList: Todo[] = [];

  todoTitle = '';
  loading = false;
  errorMessage = '';

  constructor(private httpService: HttpService) {
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
      this.httpService.addTodo(newTodo)
        .subscribe(todo => {
          this.todosList.push(todo);
          this.todoTitle = '';
        });
    }
  }

  toFetch(): void {
    this.loading = true;
    this.httpService.fetchTodos()
      .subscribe(response => {
        this.todosList = response;
        this.loading = false;
      }, error => this.errorMessage = error.message);
  }

  deleteTodo(id: number): void {
    this.httpService.removeTodo(id)
      .subscribe(todo => this.todosList = this.todosList.filter(t => t.id !== id));
  }

  finishTodo(id: number): void {
    this.httpService.completedTodo(id)
      .subscribe(todo => this.todosList.find(t => t.id === id).completed = true);
  }
}
