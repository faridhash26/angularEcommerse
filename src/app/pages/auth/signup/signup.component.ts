import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  email: string = '';
  count = 0;
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log('whit', this.email);
  }
  counter(type: string) {
    type === 'incr' ? this.count++ : this.count--;
  }
}
