import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Note } from '../../shared/models/note.model';
import { NotesService } from '../../shared/services/notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnDestroy {
  @Input()
  note: Note;
  sub1: Subscription;

  constructor(private notesService: NotesService) {}

  ngOnInit() {}

  getNoteClass(): string {
    return `4px solid ${this.note.color}`;
  }

  editNote() {
    //todo later
  }
  deleteNote() {
    // todo fix later
    this.sub1 = this.notesService.delete('notes', this.note).subscribe((note: Note) => {});
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
