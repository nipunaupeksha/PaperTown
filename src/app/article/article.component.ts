import { ConfigService } from './../config.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post = {};
  constructor(private location: Location, private route: ActivatedRoute, private config: ConfigService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostByID(id);
  }

  getPostByID(id: number) {
    return this.config.getPostByID(id);
  }

  getBack() {
    this.location.back();
  }
}
