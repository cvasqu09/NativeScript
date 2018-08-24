import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '~/login/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() { 
    console.log("here");
  }

  onTap() {
    console.log('tapped');
    // this.router.navigate(["signup"]);
    this.loginService.login().subscribe(response => {
      console.log(response);
    })
  }

}
