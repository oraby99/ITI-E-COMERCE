import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrdfromapiService } from '../prdfromapi.service';
import { iProduct } from '../shared/iproduct';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
 prd:iProduct[] |any;
 
 prdlist:iProduct[] |any;
  iProduct: any;
  constructor(private ProductService:PrdfromapiService
             ,private router: Router
  )
  {
    this.prd = {id: 1, name: '', quantity: 0, price: 0};
  }

  ngOnInit(): void {
  }
  // addProduct()
  // {
  //     console.log(this.prd);
  //     this.iProduct(this.prd);
  //     console.log(this.iProduct);
  //  }
   addProduct()
   {
    
     alert("ADDED SUCCESSFULT .. !");
     this.prdlist==this.prd;
   }
  }
