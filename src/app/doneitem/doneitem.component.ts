import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-doneitem',
  templateUrl: './doneitem.component.html',
  styleUrls: ['./doneitem.component.scss']
})
export class DoneitemComponent implements OnInit {
  @Input() doneItem: Todo
  @Output() doneChecked = new EventEmitter<Todo>()
  @Output() removeDoneEmitter = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
  }
  itemChecked(){
    this.doneItem.isDone = false
    this.doneChecked.emit(this.doneItem)
  }

  removeDone(){
    this.removeDoneEmitter.emit(this.doneItem)
  }

}
