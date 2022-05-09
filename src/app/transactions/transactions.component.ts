import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  user: any
  acno:any
  transaction:any

  constructor(private ds:DataService) { 
  this.user=this.ds.currentUser;
  this.acno=this.ds.currentAcno;

  //this.transaction=this.ds.transaction(this.acno)

  this.ds.transaction(this.acno).subscribe((result:any)=>{

      
    if(result)
    {
      alert(result.message)
     
    }

    },
    (result:any)=>{
      alert(result.error.message)
    }
    
    )

  }

  ngOnInit(): void {
  }

}
