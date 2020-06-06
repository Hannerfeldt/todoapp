import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Todo } from '../models/Todo'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Output() sendToDoneEmitter = new EventEmitter<Todo>()
  todoList: Todo[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addToList(todoItem: Todo){
    this.todoList.push(todoItem)
  }
  sendToDone(todo: Todo){

    let doneTodo: Todo = this.todoList.find((w:Todo) => { return w === todo })
    console.log(doneTodo)
    this.sendToDoneEmitter.emit(doneTodo)
    this.todoList = this.todoList.filter((v:Todo) => { return v !== todo})
  }

  sortTodo(){
    this.todoList.sort((a, b) => a.name.localeCompare(b.name))
    console.log(this.todoList.forEach((e)=>{
      e.name
    }))
  }

  removeTodoFromList(todo: Todo){
    this.todoList = this.todoList.filter((v:Todo) => { return v !== todo})
  }
}
