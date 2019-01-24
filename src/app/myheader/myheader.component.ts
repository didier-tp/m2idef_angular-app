import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  @Input()
  title : string ="titre par defaut";

  constructor() { }

  ngOnInit() {
  }

}
