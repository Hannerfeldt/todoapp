import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoItem: Todo
  @Output() todoChecked = new EventEmitter<Todo>()
  @Output() removeTodoEmitter = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
  }
  itemChecked(){
    this.todoItem.isDone = true
    this.todoChecked.emit(this.todoItem)

  }
  removeTodo(){
    this.removeTodoEmitter.emit(this.todoItem)
  }


}
