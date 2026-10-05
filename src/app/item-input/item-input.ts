import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  imports: [FormsModule],
  templateUrl: './item-input.html',
  styleUrl: './item-input.css',
})
export class ItemInput {
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  add(): void {
    const item = this.newItem.trim();
    if (!item) {
      return;
    }
    this.itemAdded.emit(item);
    this.newItem = '';
  }
}
