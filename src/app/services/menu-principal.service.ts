import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { menuItem } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  constructor(private http:HttpClient) { }

   getPizzasPrincipal(){
    return this.http.get('./assets/db/menu-princial.json');
  }
}
