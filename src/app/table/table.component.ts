import { Component, OnInit } from '@angular/core';
import { customers, transactions,  } from '../core/interface/customer';
import { CustomerService } from '../core/service/customer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit  {
  customers:customers[]=[]
  transactions:transactions[]=[]
  users:any[]=[]
  chartList:any[]=[]
  searchTerm:string = ""

constructor(private _CustomerService:CustomerService ){
}

ngOnInit(): void {
  this.getAllcustomers()
  this.getAllTransactions()
  this.getCustomerTransactions()
  this.getTransactionsOfUser("1")
}


  /* G E T    A L L    C U S T O M E R S       */
  getAllcustomers() {
    this._CustomerService.getAllcustomers().subscribe({
      next:(res)=>{
        this.customers=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

    /* G E T    A L L    C U S T O M E R S       */
    getAllTransactions() {
      this._CustomerService.getAllTransactions().subscribe({
        next:(res)=>{
          this.transactions=res

        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    /*get   customers   and transactions */
getCustomerTransactions (){
for (let i = 0; i <this.customers.length; i++) {
  const element = this.transactions.filter((ele:any)=>{
if (ele.customer_id == this.customers[i].id) {
  this.users.push({id:ele.customer_id,name:this.customers[i].name,amount:ele.amount,date:ele.date})
}
}
)
}}
    /*get   customers   and transactions by   id */
getTransactionsOfUser (id:string){
  this.chartList=[]
  for (let i = 0; i <this.users.length; i++) {
    if (id == this.users[i].id) {
  this.chartList.push({name:this.users[i].name,amount:this.users[i].amount,date:this.users[i].date})
  }
}

}


}
