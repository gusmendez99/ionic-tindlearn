import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatindPage} from '../chatind/chatind'

/**
 * Generated class for the ChatmainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chatmain',
  templateUrl: 'chatmain.html',
})
export class ChatmainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatmainPage');
  }

  goToChat() {
    this.navCtrl.push(ChatindPage)
  }

}
