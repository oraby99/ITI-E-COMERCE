import { Injectable } from '@angular/core';
import { iProduct } from './shared/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdlist:iProduct[] =[];
  prd: iProduct[] |any;
 
  constructor()
   {
    this.prdlist=
    [
      {id:1 ,name:'lenovo',    quantity:10, price:40000,categoryid:1},
      {id:2 ,name:'hp-54',     quantity:15, price:4000, categoryid:1},
      {id:3 ,name:'dell',      quantity:20, price:40000,categoryid:1},
      {id:4 ,name:'mac',       quantity:25, price:41000,categoryid:1},
      {id:5 ,name:'appel',     quantity:30, price:40000,categoryid:1},
      {id:6 ,name:'hp-765',    quantity:45, price:5000, categoryid:1},
      {id:7 ,name:'lenovo',    quantity:20, price:20000,categoryid:2},
      {id:8 ,name:'hp-799',    quantity:25, price:21000,categoryid:2},
      {id:9 ,name:'dell-984',  quantity:20, price:20000,categoryid:2},
      {id:10,name:'hp-75',     quantity:25, price:21000,categoryid:2},
      {id:11,name:'dell',      quantity:20, price:20000,categoryid:2},
      {id:12,name:'hp-757',    quantity:25, price:21000,categoryid:2},
      {id:13,name:'iphone',    quantity:45, price:36000,categoryid:3},
      {id:14,name:'iphone-11', quantity:40, price:37000,categoryid:3},
      {id:15,name:'iphone-6',  quantity:45, price:36000,categoryid:3},
      {id:16,name:'iphone-pro',quantity:40, price:37000,categoryid:3},
      {id:17,name:'iphone-7',  quantity:45, price:36000,categoryid:3},
      {id:18,name:'iphone-12', quantity:40, price:37000,categoryid:3},
      {id:19,name:'samsung',   quantity:50, price:4300, categoryid:4},
      {id:20,name:'oppo',      quantity:55, price:4600, categoryid:4},
      {id:21,name:'a-30s',     quantity:50, price:4300, categoryid:4},
      {id:22,name:'a-70',      quantity:55, price:4600, categoryid:4},
      {id:23,name:'huawi',     quantity:50, price:4300, categoryid:4},
      {id:24,name:'lenovo',    quantity:55, price:4600, categoryid:4},
      {id:25,name:'kingstone', quantity:80, price:120,  categoryid:5},
      {id:26,name:'32-GB',     quantity:90, price:110,  categoryid:5},
      {id:27,name:'kingstone', quantity:100,price:120,  categoryid:5},
      {id:28,name:'16-GB',     quantity:120,price:100,  categoryid:5},
      {id:29,name:'kingstone', quantity:100,price:120,  categoryid:5},
      {id:30,name:'64-GB',     quantity:300,price:200,  categoryid:5}
    ];
  
   } 

      getAllProducts(): iProduct[]
      {
        return this.prdlist;
      }
      addProduct(): iProduct[]
      {
        return ProductService.addProduct(this.prd);
      }
  static addProduct(prd: iProduct[]): iProduct[] {
    throw new Error('Method not implemented.');
  }


      getcatid(catid:number):iProduct[]
      {
          return this.prdlist.filter((prd)=>{return prd.categoryid== catid});
      }

      getProductByID(pID: any): iProduct |undefined
      {
        return this.prdlist.find((prd) => prd.id == pID);
       
      }

   
}
