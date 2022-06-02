import { Injectable } from '@angular/core';
import { Contacts } from './contacts.model';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../categories/categories.model';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:5000/api/Contact'
  formData:Contacts = new Contacts();
  list: Contacts[];
  cat: Categories = new Categories();
  catList: Categories[];

  postContact(){
    return this.http.post(this.baseURL, this.formData)
  }

  putContact(){
    return this.http.put(`${this.baseURL}/${this.formData.contactId}`, this.formData)
  }

  deleteContact(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Contacts[]);
  }
}
