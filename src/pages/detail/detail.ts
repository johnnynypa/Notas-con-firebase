import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NotesService } from '../../service/notes.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id:null, title:null, descripcion: null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService:NotesService) {
    this.id = navParams.get('id');
    if(this.id != 0){
      this.note = notesService.getNote(this.id);
    }
  }

  addNote(){
    this.note.id = Date.now();
    this.notesService.createNote(this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
