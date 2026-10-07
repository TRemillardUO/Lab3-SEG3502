import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  @Input() items: string[] = [];
  @Output() itemRemoved = new EventEmitter<number>();

  remove(index: number): void {
    this.itemRemoved.emit(index);
  }
}
