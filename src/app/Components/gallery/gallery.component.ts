import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  imports: [FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  inputData:any
Data:any=[]

 adddata() {
  if(this.inputData === undefined)
  {
    alert("Add image url please")
  }
  else
  {
    this.Data.push(this.inputData)
  this.inputData = ""
  }
  
}
}
