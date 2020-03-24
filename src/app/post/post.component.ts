import { ConfigService } from './../config.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

}
