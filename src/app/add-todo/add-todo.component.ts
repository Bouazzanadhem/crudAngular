import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  submitted= false;
  addlistForm: FormGroup = new FormGroup({
    // ID: new FormControl('',Math.floor(Math.random()*100)),
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    //     this.isAddMode = !this.id;
    
  }
  addlist(){
    this.submitted = true;
    if(this.addlistForm.invalid){
      return;
    }
    console.log(this.addlistForm.value);
    let list = JSON.parse(localStorage.getItem("list") || '[]');
    list.push(this.addlistForm.value);
    localStorage.setItem("list",JSON.stringify(list));
    
  }
}
