import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from '../shared/icategory';

@Component({
  selector: 'app-ordermaster',
  templateUrl: './ordermaster.component.html',
  styleUrls: ['./ordermaster.component.css']
})
export class OrdermasterComponent implements OnInit,AfterViewInit {
categorylist:Icategory[];
catid:any;
totalOrderPriceInMaster = 0;
@ViewChild ('catDDL') elem: ElementRef | any ;

  constructor() 
  {

      this.categorylist=
      [
        {id:1,name:'laptops'},
        {id:2,name:'computers'},
        {id:3,name:'ipads'},
        {id:4,name:'phones'},
        {id:5,name:'flasha'},
      ];
   
  }
 
  onTotalPriceChanged(total: any)
  {
   this.totalOrderPriceInMaster = total;
  }
 

  ngOnInit(): void
   {
      // console.log(`In ngOnInit: ${this.elem.nativeElement.value}`);
   }
   ngAfterViewInit(): void 
   {
   
     console.log(`In AfterViewInit: ${this.elem.nativeElement.value}`);
    
   }

}
