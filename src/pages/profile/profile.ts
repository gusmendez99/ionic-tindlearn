import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MatchPage } from '../match/match';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.navCtrl = navCtrl
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  presentModal() {
    let modal = this.modalCtrl.create(MatchPage);
    modal.present();
  }

  goToHome() {
    this.navCtrl.pop();
  }

}
