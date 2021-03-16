import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  lists:any;
  constructor() { }
  ngOnInit(): void {
     this.lists = JSON.parse(localStorage.getItem("lists") || '[]');
    // console.log(this.lists);
    
  }
  deletelist(i:Number){
    // console.log(i);
    // console.log(this.lists);
    // console.log(list);
    this.lists.splice(i,1);
    // console.log(this.lists);
    localStorage.setItem("lists",JSON.stringify(this.lists));
  }

}
