import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class ABOUTComponent implements OnInit {

  fullName: String ='';
  salary: number = 25000;

  constructor() { }

  ngOnInit(): void {
  }

}
