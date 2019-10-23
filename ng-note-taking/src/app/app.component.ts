import {Component, OnInit} from '@angular/core';
import {NotesService} from "./shared/services/notes.service";
import {Note} from "./shared/models/note.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-note-taking';
  notes: Note[];
  isLoaded = false;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
      this.isLoaded = true;
    });
  }
}
