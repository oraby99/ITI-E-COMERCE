import { Component, OnInit } from '@angular/core';
import { iProduct } from '../shared/iproduct';
import { CompanyInfo } from '../viewModel/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
companydetail:CompanyInfo;
isServicesDisplayed:boolean;
mainproduct:iProduct[];
toggle()
{
  this.isServicesDisplayed=!this.isServicesDisplayed;
}
  constructor()
  {

    this.isServicesDisplayed=true;
     this.companydetail = new CompanyInfo('oraby company',
     'https://picsum.photos/300/200',
     ['HTML','HTML5','CSS',
      'CSS3','JAVASCRIPT','JQUERY',
      'BOOTSTRAP','JSON','AJAX',
      'ANGULAR','C++','JAVA',
      'C#','DATA STRACTURE','ALGORITM',
      'SQL','MARKETING','MANAGEMENT',
     ],
     100000
     );
     this.companydetail.establisdate =new Date();
   this.mainproduct=
   [
     {id:1,name:"iphone-6",quantity:10,price:10000},
     {id:2,name:"iphone-7",quantity:20,price:20000},
     {id:3,name:"iphone-11",quantity:30,price:30000},
     {id:4,name:"iphone-12",quantity:40,price:40000},
     {id:5,name:"iphone-pro",quantity:50,price:50000},
   ];
  }

  ngOnInit(): void {

  }

}



