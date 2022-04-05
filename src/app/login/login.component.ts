import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  aim="Your Perfect Banking Partner";
  accnum="Please enter your Account number"
  acno=""
  pswd=""

  // dataBase

  dataBase:any={

      1000:{acno:1000,uname:"Aleena",password:1000,balance:750},
      1001:{acno:1001,uname:"Mariya",password:1001,balance:1500},
      1002:{acno:1000,uname:"Augustine",password:1002,balance:50000}

  }

  constructor( private router:Router) { } //this is for navigate for url

  ngOnInit(): void {
  }
  
  passwordChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

// login using change and ngModel (two way binding)

  login(){

    var acno=this.acno;
    var pwd=this.pswd;
    var database=this.dataBase;

    if(acno in database){

      if(pwd==database[acno]["password"])
      {
        alert("Login Succesfull")
        this.router.navigateByUrl("dashboard") // adding url for navigation
      }
      else{
        alert("Invalid Password")
      }

    }
    else{
      alert("Invalid User")
    }
   
  }
// login using template reference variables

  // login(a:any,p:any){

  //   var acno=a.value;
  //   var pwd=p.value;
  //   var database=this.dataBase;

  //   if(acno in database){

  //     if(pwd==database[acno]["password"])
  //     {
  //       alert("Login Succesfull")
  //     }
  //     else{
  //       alert("Invalid Password")
  //     }

  //   }
  //   else{
  //     alert("Invalid User")
  //   }
   
  // }

}
