import { Component } from '@angular/core';
import { findAll, tree } from './Tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree';

  constructor() {
    const result = findAll('C', tree); // todos los nombres que empiezan con C
    console.log(result);
  }
}
