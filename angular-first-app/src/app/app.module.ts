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
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import {AppRoutingModule} from './app-routing.module';
import { PostRComponent } from './post-r/post-r.component';
import { ErrorComponent } from './error/error.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent, StyleDirective, IfnotDirective, FilterPipe, FormsComponent, HttpclientComponent, AboutComponent, AboutExtraComponent, HomeComponent, PostsComponent, PostRComponent, ErrorComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {
}
