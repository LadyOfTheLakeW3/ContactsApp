import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/contacts.model';
import { ContactsService } from '../shared/contacts.service';
import { ToastrService } from 'ngx-toastr'
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public service: ContactsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    //tu miało być odwołanie do metody populateSelect w CategoriesComponent
    let categoriecObj = new CategoriesComponent();
    //categoriecObj.populateSelect();
  }

  populateForm(selectedRecord: Contacts){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteContact(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error('Deleted successfully','Contact');
        },
        err =>{console.log(err)}
      )
    }
  }
}
