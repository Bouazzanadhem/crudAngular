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

  constructor(public route: Router,private snackbar:MatSnackBar) { }
    id:any
  ngOnInit(): void {
    this.id = Math.floor(Math.random()*100);
    // console.log(this.id);
    // console.log(this.addlistForm.value.Name);
    
    // this.id = this.route.snapshot.params['id'];
    //     this.isAddMode = !this.id;
    
  }
  addlist(){
    this.submitted = true;
    if(this.addlistForm.invalid){
      return;
    }
    // console.log(this.addlistForm.value.Name);
    let list={id:this.id,Name:this.addlistForm.value.Name,Discription:this.addlistForm.value.Discription}
    let lists = JSON.parse(localStorage.getItem("lists") || '[]');
    lists.push(list);
    localStorage.setItem("lists",JSON.stringify(lists));
    this.route.navigate(['list-todo'])
    this.snackbar.open("added", "close", {
      duration: 2000,
     
    });
    
  }
}
