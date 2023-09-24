import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { iProduct } from '../shared/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit {
  prd: iProduct  | any;
 
  constructor(private activeroute:ActivatedRoute 
              ,private prdService: ProductService
              ,private router: Router
             // ,private prdServiceFrmAPI: ProductsFrmAPIService
              ,private location: Location) 
          { 
            
          }
          goBack()
          {
            this.location.back();
          }
          changePrdID()
          {
            this.router.navigateByUrl('/products/7027');
          }
  ngOnInit(): void
   {
    
    const prdID = this.activeroute.snapshot.paramMap.get('pid');
    console.log(prdID);
    this.prd = this.prdService.getProductByID(Number(prdID));
   }

}
