import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from "./Components/cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [CartComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping_project';
}
