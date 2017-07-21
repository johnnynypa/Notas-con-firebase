import {Injectable} from '@angular/core';

@Injectable()
export class NotesService{
    notes = [
        {id:1, title:'Nota 1', descripcion: "Esta es la nota 1"},
        {id:2, title:'Nota 2', descripcion: "Esta es la nota 2"},
        {id:3, title:'Nota 3', descripcion: 'Esta es la nota 3'}
    ];
    public getNotes(){
        return this.notes;
    }
    public getNote(id){
        return this.notes.filter( (e, i) =>{
            return e.id ==id;
        })[0] || {id:null, title:null, descripcion: null};
    }
    public createNote(note){
        this.notes.push(note);
    }
}