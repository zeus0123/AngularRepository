import { Component, OnInit, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() label: string;
  @Input() bgColor: string;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

  setStyles() {
    const styles = {
      'background-color': !this.bgColor ? 'grey' : this.bgColor,
      color: this.color
    };
    return styles;
  }

}
