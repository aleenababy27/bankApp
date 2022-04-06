import { Component, OnInit } from '@angular/core';
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

  constructor(private db:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    let uname=this.uname
    let acno=this.acno
    let pswd=this.pswd

    let result = this.db.register(uname,acno,pswd)


    if(result)
    {
      alert("registration completed. Login Now !!!!")
      this.router.navigateByUrl("")
    }
    else{
      alert("Already registered y this account number. please login or try with new number.")
    }
    
  }

}
