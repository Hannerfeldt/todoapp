export class Todo {
  constructor(s:string){
    this.name = s
  }
  name: string;
  date: Date = new Date();
  isDone: boolean = false;
  icon: string;
}
