import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  @Input()
  title : string ="titre par defaut";

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  myMenuDefs: MenuDefinition[] = [
    {
      label: "MyDropDownMenu1",
      children: [
        { label: "basic", path: "basic" },
        { label: "compte", path: "compte" },
        { divider: true },
        { label: "preference", path: "preference" }
      ]
    },
    { label: "basic", path: "basic" },
    { label: "compte", path: "compte" }
  ];

  

}
