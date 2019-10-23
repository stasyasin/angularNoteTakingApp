import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  message: Message;
  noteText: '';
  colors: string[] = ['Orange', 'Green', 'Red', 'Yellow', 'Blue', 'Pink', 'Black', 'Brown'];

  constructor() {}

  ngOnInit() {
    this.message = new Message('success', '');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // const name = form.value.name;
    // const capacity = form.value.capacity < 0 ? form.value.capacity * -1 : form.value.capacity;
    // const category = new Category(name, capacity, +this.currentCategoryId);
    // this.sub1 = this.categoriesService.updateCategory(category).subscribe((cat: Category) => {
    //   this.onCategoryEdit.emit(category);
    //   this.message.text = 'Note was successfully added';
    //   window.setTimeout(() => {
    //     this.message.text = '';
    //   }, 5000);
    // });
    this.showSuccessMessage();
    this.noteText = '';
  }

  private showSuccessMessage() {
    this.message.text = 'Note was successfully added';
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
