import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  @Input() isHeader: boolean; // isheader

  constructor() { }

  ngOnInit(): void {
  }

}
