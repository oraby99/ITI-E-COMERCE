import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {iProduct} from 'src/app/shared/iproduct';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PrdfromapiService {

  constructor(private httpClient: HttpClient)
   {

   }

    getAllProducts(): Observable<iProduct[]>
     {
      return this.httpClient.get<iProduct[]>(`${environment.API_URL}/getproducts`);
     }
     addProduct(prd: iProduct)
     {
      const httpOptions = {headers: new HttpHeaders(
        {
        'Content-Type': 'application/json'
        }
     )};
      }
}
