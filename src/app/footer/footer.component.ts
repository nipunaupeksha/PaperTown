import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = {};
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.footer = this.getFooter();
  }

  getFooter(){
    return this.config.getConfig().footer;
  }
}
