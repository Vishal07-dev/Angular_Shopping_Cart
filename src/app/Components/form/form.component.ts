import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
nameInput : string =''
emailInput : any = ''
passwordInput : string = ''
error : string =''
PasswordError : string =''

onclick()
{
  if(this.nameInput == '' || this.emailInput == '' || this.passwordInput == '')
  {
    this.error="Please Fill all Fields "
  }
  else if(this.passwordInput.length<8)
    {
      this.error = ''
      this.PasswordError = "please enter  8 char"
    }
    else{
      
      this.PasswordError = ''
    }
 
  

  // if()
  // {
    
  // }
}
}
