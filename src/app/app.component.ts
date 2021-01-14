import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',  // Directive name, custom html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  // a class becomes angular component when use @Component with metadata
  title = 'Product Repo';
}
