import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {FormsComponent} from './forms/forms.component';
import {HttpclientComponent} from './httpclient/httpclient.component';

// '' === http://localhost:4200
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'requests', component: HttpclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // регистрация роутинга!!!
  exports: [RouterModule]
})

export class AppRoutingModule {

}
