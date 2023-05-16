import { Component, OnInit } from '@angular/core';
import { ClasiAppResponse } from '../interface/clasiApp';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-clasi-app',
  templateUrl: './info-clasi-app.page.html',
  styleUrls: ['./info-clasi-app.page.scss'],
})
export class InfoClasiAppPage implements OnInit {
  contenidos: ClasiAppResponse |any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.contenidos = JSON.parse(params['data']);
    })
  }

  ngOnInit() {
    
  
  }

}
