import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post-r',
  templateUrl: './post-r.component.html',
  styleUrls: ['./post-r.component.scss']
})
export class PostRComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getById(+params.id);
    });
  }

}
