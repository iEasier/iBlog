import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/component/login/login.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { CommonService } from './shared/service';
import { SettingComponent } from './shared/component/setting/setting.component';
import { WelcomeComponent } from './shared/component/welcome/welcome.component';
import { SearchComponent } from './shared/component/search/search.component';
import { HomeContentComponent } from './shared/component/home-content/home-content.component';
import { WriteNoteComponent } from './shared/component/write-note/write-note.component';
import { ShowPhotosComponent } from './shared/component/show-photos/show-photos.component';
import { Ng2Echarts } from 'ng2-echarts';

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
    WelcomeComponent,
    SearchComponent,
    HomeContentComponent,
    WriteNoteComponent,
    ShowPhotosComponent,
    Ng2Echarts
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
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
