import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'exam';
  fecha: any;

  constructor() { }

  ngOnInit(): void {

    this.fecha = new Date;
    this.fecha = this.fecha.getDate()+'/'+(this.fecha.getMonth()+1)+'/'+this.fecha.getFullYear();
    
  }

}
