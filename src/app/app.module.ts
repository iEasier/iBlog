import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/component/login/login.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { LoginService } from './shared/service';
import { SettingComponent } from './shared/component/setting/setting.component';
import { WelcomeComponent } from './shared/component/welcome/welcome.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    NavComponent,
    NavComponent,
    SettingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
