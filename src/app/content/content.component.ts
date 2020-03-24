import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  services = {};
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.services = this.getServices();
  }

  getServices(){
    return this.config.getConfig().services;
  }
}
