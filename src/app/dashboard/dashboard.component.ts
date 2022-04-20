import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 acno=""
 pswd=""
 amount=""

 acno1=""
 pswd1=""
 amount1=""
 user: any
 

 depositForm=this.fb.group(
  {
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  }
)
withdrawForm=this.fb.group(
  {
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  }
)

  constructor(private ds:DataService , private fb:FormBuilder, private router: Router) {
   this.user=this.ds.currentUser;
   }

  ngOnInit(): void {

    if(!localStorage.getItem("currentAcno")){
      alert("Please log in")
      this.router.navigateByUrl("")
    }
  }
deposit()
{
  var acno =this.depositForm.value.acno
  var pswd =this.depositForm.value.pswd
  var amount =this.depositForm.value.amount
  if(this.depositForm.valid){
  const result = this.ds.deposit(acno,pswd,amount)

  if(result)
  {
    alert(amount + " deposited successfully. New Balance is " + result)
  }
}
else{
  alert("invalid inputs")
}
}

withdraw(){
  var acno =this.withdrawForm.value.acno1
  var pswd =this.withdrawForm.value.pswd1
  var amount =this.withdrawForm.value.amount1

  if(this.withdrawForm.valid){
  const result = this.ds.withdraw(acno,pswd,amount)

  if(result)
  {
    alert(amount + " withdrawed successfully. New Balance is " + result)
  }
}
else{
  alert("invalid inputs")
}

}
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  this.router.navigateByUrl("")
}

}
