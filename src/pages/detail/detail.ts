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
      notesService.getNote(this.id)
      .subscribe( nota =>{
        this.note = nota;
      })
    }
  }

  addNote(){
    if(this.id != 0){
      //Editando
      this.notesService.editNote(this.note);
    }else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
    }
    this.navCtrl.pop();
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
