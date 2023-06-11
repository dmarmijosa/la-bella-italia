import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TapasService {

  constructor(private http:HttpClient) { }

  getTapas(){
   return this.http.get('/assets/db/tapas.json');
 }
}
