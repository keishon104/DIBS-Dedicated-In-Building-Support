import { Component } from '@angular/core';

/*
  Generated class for the MyContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-content',
  templateUrl: 'my-content.html'
})
export class MyContentComponent {

  text: string;

  constructor() {
    console.log('Hello MyContent Component');
    this.text = 'Section for custom content';
  }

}
