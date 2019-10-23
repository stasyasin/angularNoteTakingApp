import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from './shared/services/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './display-notes/note/note.component';

@NgModule({
  declarations: [AppComponent, AddNoteComponent, DisplayNotesComponent, NoteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
