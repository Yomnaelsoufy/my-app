import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  password: string = '';
  username: string = '';
  onSubmit(): void {
    alert('has successfully signed in!');
  }
}
