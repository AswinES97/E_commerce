import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverUrl = environment.serverUrl
  constructor(public http:HttpClient) { }


  getProducts(){
    return this.http.get(this.serverUrl+'/admin-dash');
  }

  // get single product
  getSingleProduct(pid:any){
    return this.http.get(this.serverUrl+`/admin-dash/${pid}`);
  }
  
  
  // register new account
  registerAcc(data:any){

    this.http.post(this.serverUrl+'/register',{'user': data})
      .subscribe()

  }

  getUser(id:any){
    return this.http.get(this.serverUrl+`/user/getUser/${id}`)
  }


  // update account
  updateAcc(data: any) {
    this.http.post(this.serverUrl+'/user/update', { 'newData': data ,'userID':localStorage.getItem('userID')})
      .subscribe()
  }

}
