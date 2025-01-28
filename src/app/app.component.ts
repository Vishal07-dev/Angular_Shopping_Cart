import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./Components/cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping_project';
}
