import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  @Input() lists:any;
  constructor() { }
  ngOnInit(): void {
  }
  deletelist(i:Number){
    
    this.lists.splice(i,1);
    localStorage.setItem("lists",JSON.stringify(this.lists));
  }

}
