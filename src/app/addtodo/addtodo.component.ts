import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  @Output() newTodoEmitter = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
    document.querySelector("#icon-dropdown").setAttribute("style", "display:none")

    document.getElementById("icon-menu").addEventListener("click", this.toggleIconMenu)

  }

  addTodo(inputValue: string){
    let newTodo:Todo = new Todo(inputValue)
    newTodo.icon = document.querySelector("#icon").className
    this.newTodoEmitter.emit(newTodo)
  }

  toggleIconMenu(){
    let dropdown = document.querySelector("#icon-dropdown")
    if (dropdown.getAttribute("style") === "display:none") return dropdown.setAttribute("style", "display:flex")
    if (dropdown.getAttribute("style") === "display:flex") return dropdown.setAttribute("style", "display:none")
  }

  addIcon(event){
    console.log(event)

    document.querySelector('#icon').setAttribute("class", event.path[0].className)

  }

}
