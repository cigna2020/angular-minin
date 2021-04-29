import {NgModule, Provider} from '@angular/core';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './httpclient/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent, StyleDirective, IfnotDirective, FilterPipe, FormsComponent, HttpclientComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {
}
