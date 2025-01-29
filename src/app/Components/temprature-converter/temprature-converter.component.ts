import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temprature-converter',
  imports: [FormsModule],
  templateUrl: './temprature-converter.component.html',
  styleUrl: './temprature-converter.component.css'
})
export class TempratureConverterComponent {
  fToc : number = 0
  cTof : number = 0
  inputdata : number =0

  onchange(){
    this.fToc = parseFloat(((this.inputdata - 32) * 5 / 9).toFixed(3))
    this.cTof = parseFloat(((this.inputdata * 9 / 5) + 32).toFixed(3))

  }
  
}
