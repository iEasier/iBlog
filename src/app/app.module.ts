import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { HomeModule } from './component/home';
import { UserinfoModule } from './component/userinfo';
import { AppComponent } from './app.component';
import { CommonService } from './service';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from './const';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HomeModule,
    UserinfoModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(Routes)
  ],
  providers: [CommonService,
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule { }
