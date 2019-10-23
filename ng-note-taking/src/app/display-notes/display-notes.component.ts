import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../shared/models/note.model";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input()
  notes: Note[] = [];

  constructor() { }

  ngOnInit() {
  }

}
