import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { DonelistComponent } from './donelist/donelist.component';
import { DoneitemComponent } from './doneitem/doneitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodolistComponent,
    TodoitemComponent,
    DonelistComponent,
    DoneitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
