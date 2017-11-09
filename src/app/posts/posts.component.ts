import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../posts-details';
import { FilterPipe } from './../filter.pipe';
import { SortPipe  } from './../sort.pipe';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  posts = POSTS;
  date: boolean = true;





  constructor() { }

  ngOnInit() {

  }

}
