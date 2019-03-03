import { Component, OnInit, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  @Input() label: string;
  @Input() class: string;

  styles;
  constructor() { }

  ngOnInit() {
  }

  setColor() {
    switch (this.class) {
      case 'Primary':
         this.styles = {
           'background-color' : '#0575E6'
         };
         console.log(this.styles);
         break;
      case 'Danger':
         this.styles = {
          'background-color' : '#dd1818'
         };

         return this.styles;
    }
  }

}
