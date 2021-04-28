import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {StyleDirective} from './directives/style.directives';
import {IfnotDirective} from './directives/ifnot.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent, StyleDirective, IfnotDirective, FilterPipe, FormsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
