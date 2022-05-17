import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl='https://localhost:44316/api/values/getcategory';

  constructor(private httpclient:HttpClient) { }
 
  
  getCategory():Observable<Category[]> { 
    return this.httpclient.get<Category[]>(this.apiUrl);
  }   
   
}
