import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.scss']
})
export class DonelistComponent implements OnInit {

  @Output() sendToTodoEmitter = new EventEmitter<Todo>()

  doneList: Todo[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addToDone(done:Todo){
    this.doneList.push(done)
  }

  sendToTodo(done: Todo){
    let doneTodo: Todo = this.doneList.find((w:Todo) => { return w === done })
    this.sendToTodoEmitter.emit(doneTodo)
    this.doneList = this.doneList.filter((v:Todo) => { return v !== done})
  }

  removeDoneFromList(done: Todo){
    this.doneList = this.doneList.filter((v:Todo) => { return v !== done})
  }
}
