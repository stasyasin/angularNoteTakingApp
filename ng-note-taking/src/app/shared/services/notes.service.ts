import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from "../core/base-api";
import {Note} from "../models/note.model";

@Injectable()
export class NotesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addNote(note: Note): Observable<Note> {
    return this.post('notes', note);
  }

  getNotes(): Observable<Note[]> {
    return this.get('notes');
  }

  //todo add later
  // updateNote(note: Note): Observable<Note> {
  //   return this.put(`notes/${note.id}`, note);
  // }
  //
  // getNoteById(id: string): Observable<Note> {
  //   return this.get(`notes/${id}`);
  // }
}
