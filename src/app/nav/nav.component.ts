import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  labelcontact = "Contact123";
  labelAbout = "About";
  
  employee = {
    name : 'awegbhjh dfgdfg',
    tel : '098-415-4545',
    salary : 25000 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
