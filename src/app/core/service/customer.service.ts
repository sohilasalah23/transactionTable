import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { transactions } from '../interface/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
  // userData:BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private _httpClient:HttpClient) {
   }



   getAllcustomers():Observable<any>{
    return this._httpClient.get(`https://api-r4nd.vercel.app/customers` )

   }


   getAllTransactions():Observable<any>{
    return this._httpClient.get(`https://api-r4nd.vercel.app/transactions`  )

   }

}
