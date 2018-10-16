import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bocina = BocinaPage;
  tv = TvPage;
  smartphone = SmartphonePage;
  lampara = LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  Clickbocina(){
    this.navCtrl.push(this.bocina);

  }

  Clicktv(){
    this.navCtrl.push(this.tv);

  }

  Clicksmartphone(){
    this.navCtrl.push(this.smartphone);

  }

  Clicklampara(){
    this.navCtrl.push(this.lampara);

  }


}
