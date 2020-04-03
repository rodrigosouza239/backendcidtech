import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  faArrowLeft = faArrowLeft;
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('/login')
  }

}
