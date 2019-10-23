import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../shared/models/message.model';
import { Note } from '../shared/models/note.model';
import { Subscription } from 'rxjs';
import { NotesService } from '../shared/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit, OnDestroy {
  message: Message;
  noteText: '';
  colors: string[] = ['Orange', 'Green', 'Red', 'Yellow', 'Blue', 'Pink', 'Black', 'Brown'];
  sub1: Subscription;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.message = new Message('success', '');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const text = form.value.text;
    const color = form.value.color;
    const id = 1; // todo fix later to increment and to take last note number + 1
    const note = new Note(`Note ${id}`, text, color, new Date().toString());
    this.sub1 = this.notesService.addNote(note).subscribe((note: Note) => {
      this.showSuccessMessage();
      this.noteText = '';
    });
  }

  private showSuccessMessage() {
    this.message.text = 'Note was successfully added';
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
