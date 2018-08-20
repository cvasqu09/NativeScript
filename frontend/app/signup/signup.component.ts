import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  public user: User;

  constructor(private router: Router) { }

  ngOnInit() { 
    this.user = new User("hello", "goodbye", "hi");
  }

  onTap() {
    console.log("tapped");
    this.router.navigate(['/signup']);
  }

}
