import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialsites = [];
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.socialsites = this.getSocialSites();
  }

  getSocialSites(){
    return this.config.getConfig().socialsites;
  }
}
