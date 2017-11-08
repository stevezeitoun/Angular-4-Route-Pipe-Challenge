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
  toggle = true; // start with true == shortDate

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }



  constructor() { }

  ngOnInit() {
  }

}
