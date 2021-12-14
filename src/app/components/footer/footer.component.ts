import { Component, OnInit } from '@angular/core';
import { Popover } from 'bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))

    Array.from(document.querySelectorAll('span[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
  }
  
}
