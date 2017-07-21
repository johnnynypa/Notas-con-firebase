import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';
@Injectable()
export class NotesService{
    constructor(public afDB:AngularFireDatabase){}
    public getNotes(){
        return this.afDB.list('notas/');
    }
    public getNote(id){
        return this.afDB.object('notas/'+id);
    }
    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }

    public editNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }

    public deleteNote(note){
        this.afDB.database.ref('notas/'+note.id).remove();
    }
}