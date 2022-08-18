import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  homeProduct: any =[];

  goToPro(id:any){
    // console.log(id);
    this.router.navigate(['single-product'],{queryParams:{pID:id}});
  }


  constructor(private http: HttpService,private router: Router) { }

  ngOnInit(): void {
    this.http.getProducts()
    .subscribe((res)=>{
      this.homeProduct=res;
    })
  }

}
