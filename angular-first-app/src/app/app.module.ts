import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {StyleDirective} from './directives/style.directives';
import {IfnotDirective} from './directives/ifnot.directive';


@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent, StyleDirective, IfnotDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
