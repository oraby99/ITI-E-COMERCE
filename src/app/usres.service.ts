import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsresService {

  constructor() { }
  login(token: string)
  {
    localStorage.setItem('usertoken',token)
  }
  logout()
  {
    localStorage.removeItem('usertoken');
  }
  islogged():boolean
  {
     if(localStorage.getItem('usertoken'))
     {
       return true
     }
     else
     return false;
  }
}
