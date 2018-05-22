import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chatind',
  templateUrl: 'chatind.html',
})
export class ChatindPage {

  messages: Array<any>;
  text: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl
    this.messages = []
    this.text = ""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatindPage');
  }

  addMessage() {
    this.messages.push(this.text)
    this.text = ""
  }

}
