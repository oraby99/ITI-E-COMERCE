import { Component, OnInit } from '@angular/core';
import { PrdfromapiService } from '../prdfromapi.service';
import { iProduct } from '../shared/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prdlist: iProduct[] | any;
  constructor(private prdserv:PrdfromapiService)
   { 

   }

  ngOnInit(): void 
  {
    // addProduct()
    // {
    //     console.log(this.prd);
    //     this.prdlist(this.prd);
    //     console.log(this.prdlist);
    //  }
     
    //     this.prdserv.getAllProducts().subscribe
    //     (
    //      (response) => 
    //      {
    //       console.log(this.prdlist);
    //       this.prdlist = response;
    //      },
    //      (err) =>
    //      {
    //        console.log(err);
    //      }
    //     )
  }
  iProduct(iProduct: any) {
    throw new Error('Method not implemented.');
  }
  prd(prd: any) {
    throw new Error('Method not implemented.');
  }
}
function addProduct() {
  throw new Error('Function not implemented.');
}

