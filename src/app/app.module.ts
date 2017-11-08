import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
        },
      {
      path: 'about',
      component: AboutComponent,
      },
      {
      path: 'posts',
      component:  PostsComponent,
      },

      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
