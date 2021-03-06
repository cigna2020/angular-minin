import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {FormsComponent} from './forms/forms.component';
import {HttpclientComponent} from './httpclient/httpclient.component';
import {PostRComponent} from './post-r/post-r.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorComponent} from './error/error.component';
import {AuthGuard} from './auth.guard';

// '' === http://localhost:4200
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [
      {path: 'extra', component: AboutExtraComponent}
    ]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'forms', component: FormsComponent},
  {path: 'requests', component: HttpclientComponent},
  {path: 'post/:id', component: PostRComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // регистрация роутинга!!!
  exports: [RouterModule]
})

export class AppRoutingModule {

}
