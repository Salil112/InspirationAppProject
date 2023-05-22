import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins } from '@capacitor/core';
import '@codetrix-studio/capacitor-google-auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular'
import { CommonService } from 'src/app/sercices/common.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private http: HTTP, private platform: Platform, private _commonService: CommonService, private router: Router, private httpClient: HttpClient
  ) {
    this.initializeApp();
  }

  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      GoogleAuth.initialize(
        {
          clientId: '1073709398626-5937cqodhd9e9sv7led83tvi11fon8p9.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        }
      )
    })
  }

  async loginWithFacebook() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    console.log('result=', result);
    if (result.accessToken && result.accessToken.userId) {
      this.loadUserData(result.accessToken);
    }
  }

  async loginWithGoogle() {
    try {
      let googleUser = await Plugins.GoogleAuth.signIn(null);
      if (googleUser) {
        this._commonService.authToken = googleUser.idToken;
      }
    } catch (error) {
      this._commonService.authToken = '123456';
      this.router.navigate(['inspiration']);
    }
  }

  loadUserData(val: any) {
    this._commonService.authToken = val.token;
    const url = 'https://graph.facebook.com/' + val.userId + '?fields=id,name,picture.width(720),birthday,email&access_token=' + val.token;
    let res = this.httpClient.post(url, {}, {}).toPromise();
    this.router.navigate(['inspiration']);
  }


}
