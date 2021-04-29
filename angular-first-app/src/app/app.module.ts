import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostFormComponent} from './post-form/post-form.component';
import {PostComponent} from './post/post.component';
import {StyleDirective} from './directives/style.directives';
import {IfnotDirective} from './directives/ifnot.directive';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsComponent} from './forms/forms.component';
import {HttpclientComponent} from './httpclient/httpclient.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent, StyleDirective, IfnotDirective, FilterPipe, FormsComponent, HttpclientComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
