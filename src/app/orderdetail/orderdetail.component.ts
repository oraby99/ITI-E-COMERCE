import { Component, Input, OnChanges, OnInit, SimpleChanges,EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
//import { AnyARecord } from 'dns';
import { iProduct } from '../shared/iproduct';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit,OnChanges {
@Input() selectcatid :any;
@Output() totalPriceChanged: EventEmitter<any> ; 
prdlist:iProduct[]=[];
totalprice:number;
  constructor( private _ProductService :ProductService)
   {
   this.totalprice =0;
   this.totalPriceChanged = new EventEmitter <any>();
  
   } 
 getcatid():iProduct[]
 {
    return this.prdlist.filter((prd)=>{return prd.categoryid== this.selectcatid});
 }
 getProductByID(): iProduct |undefined
 {
   return this._ProductService.getProductByID(this.selectcatid);
 }

 updateprice(price: number, count: any)
 {
  this.totalprice += (price * count);
  this.totalPriceChanged.emit(this.totalprice);
  // this.totalprice=0;
 }

  ngOnChanges(changes: SimpleChanges): void 
  {
    
  }

  ngOnInit(): void 
  {
    this.prdlist =this._ProductService.getAllProducts();
  }

}
