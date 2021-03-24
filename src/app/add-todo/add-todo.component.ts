import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  submitted= false;
  addlistForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required])
  })

  UserData:any[]=[]

  constructor(public route: Router,private snackbar:MatSnackBar) { }
    id:any
  ngOnInit(): void {
    this.id = Math.floor(Math.random()*100);

    
  }
  addlist(){
    this.submitted = true;
    if(this.addlistForm.invalid){
      return;
    }
    // this.route.navigate(['list-todo'])
    this.UserData.push(this.addlistForm.value)
    console.log(this.UserData);
    
    this.snackbar.open("added", "close", {
      duration: 2000,

    });
  }
}
