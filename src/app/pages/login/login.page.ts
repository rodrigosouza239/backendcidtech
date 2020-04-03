import { Component, OnInit } from '@angular/core';
import { faSignOutAlt,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;


  constructor(public loadingController: LoadingController, private router: Router ) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'tamos ajustando as coisas pra você...',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
     this.router.navigateByUrl('/home1')
  }

  register(){
    this.router.navigateByUrl('/register');
  }

}
