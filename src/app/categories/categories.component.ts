import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from '../shared/contacts.service';
import { Categories } from './categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //metoda miala sluzyc pobieraniu wartosci wybranej kategorii z listy dostepnych kategorii
  populateSelect(selectedRecord: Categories){
    //this.populateSelect = Object.assign({},selectedRecord);
  }
}
