import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 0; //primero se pone la variable luego ":" y despues el tipo de dato 

  constructor(){
    //this.counter ++; //siempre se usará this en la referencia de typescript y en html es solo. 
    this.increment();
    this.increment();
    this.increment();
  }

  increment() : void{
    this.counter++;
  }
}
