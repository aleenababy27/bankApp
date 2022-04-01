import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  aim="Your Perfect Banking Partner";
  accnum="Please enter your Account number"
  acno=""
  pwd=""

  // dataBase

  dataBase={

      1000:{acno:1000,uname:"Aleena",password:1000,balance:750},
      1001:{acno:1001,uname:"Mariya",password:1001,balance:1500},
      1002:{acno:1000,uname:"Augustine",password:1002,balance:50000}

  }

  constructor() { }

  ngOnInit(): void {
  }
  
  passwordChange(event:any){
    this.pwd=event.target.value;
    console.log(this.pwd);
    
  }
  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }


  login(){
    alert("Login attempted")
  }

}
