import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotesService} from "./shared/services/notes.service";
import {Note} from "./shared/models/note.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-note-taking';
  notes: Note[];
  isLoaded = false;
  sub1: Subscription;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.sub1 = this.notesService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
      this.isLoaded = true;
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
