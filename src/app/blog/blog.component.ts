import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog = {};
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.blog = this.getBlogs();
  }

  getBlogs() {
    return this.config.getConfig().blog;
  }
}
