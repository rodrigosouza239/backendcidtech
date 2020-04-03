import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { library } from '@fortawesome/fontawesome-svg-core';
import {faPowerOff,faShareAlt,faArrowLeft,faSignInAlt,faUserCircle,faBarcode,faShareSquare,faUserLock,faSignal,faUserEdit, faComment, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add( faPowerOff, faShareAlt, faArrowLeft,faSignInAlt,faUserCircle,faBarcode,faShareSquare,faUserLock,faSignal,faUserEdit,faComment,faEdit  );


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FontAwesomeModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
