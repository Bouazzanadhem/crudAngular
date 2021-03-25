import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  @Input() lists:any;
  @Output() updateEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()

  constructor() { }
  ngOnInit(): void {
  }
  updateUser(i:number){
    this.updateEvent.emit(i)
  }
  deletelist(i:number){
    
    this.deleteEvent.emit(i)
  }

}
