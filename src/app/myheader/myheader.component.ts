import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  @Input()
  title : string ="titre par defaut";

  myMenuDefs: MenuDefinition[] = [
    {
      label: "MyDropDownMenu1",
      children: [
        { label: "menu-item-basic", path: "basic" },
        { label: "menu-item-compte", path: "compte" },
        { divider: true },
        { label: "menu-item-basic", path: "basic" }
      ]
    },
    { label: "menu-item-basic", path: "basic" },
    { label: "menu-item-compte", path: "compte" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
