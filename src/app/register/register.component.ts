import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  uname=""
  pswd=""

registerForm=this.fb.group(
  {
    acno:[''],
    uname:[''],
    pswd:['']

  }
)


  constructor(private db:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    let uname=this.registerForm.value.uname
    let acno=this.registerForm.value.acno
    let pswd=this.registerForm.value.pswd

    let result = this.db.register(uname,acno,pswd)


    if(result)
    {
      alert("registration completed. Login Now !!!!")
      this.router.navigateByUrl("")
    }
    else{
      alert("Already registered y this account number. please login or try with new number.")
      this.router.navigateByUrl("")
    }
    
  }

}
