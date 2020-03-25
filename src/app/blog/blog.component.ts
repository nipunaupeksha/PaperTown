import { PagerService } from './../pager.service';
import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any = {};
  pageSize = 4;
  allItems: any[];
  pages: any[];
  pager: any = {};
  constructor(private config: ConfigService, private pagerService: PagerService) { }

  ngOnInit(): void {
    this.blog = this.getBlogs();
    this.allItems = this.blog.posts;
    this.setPage(1);
  }

  getBlogs() {
    return this.config.getConfig().blog;
  }

  setPage(pageNumber: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex);
  }
}
