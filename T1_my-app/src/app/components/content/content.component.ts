import { Component } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-content',
  imports: [ContentComponent, CounterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
