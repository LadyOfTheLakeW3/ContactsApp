import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from 'src/app/shared/contacts.model';
import { ContactsService } from 'src/app/shared/contacts.service';
import { ToastrService } from 'ngx-toastr'
import { Categories } from 'src/app/categories/categories.model';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styles: [
  ]
})
export class ContactsFormComponent implements OnInit {

  constructor(public service:ContactsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.contactId == 0)
      this.insertRecord(form)
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postContact().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully','Contact');
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putContact().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully','Contact');
      }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Contacts();
  }
}

