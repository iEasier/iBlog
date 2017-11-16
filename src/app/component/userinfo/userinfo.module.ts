import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { SettingNavComponent } from './setting/setting-nav/setting-nav.component';
import { SettingContentComponent } from './setting/setting-content/setting-content.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    SettingComponent,
    SettingNavComponent,
    SettingContentComponent
  ]
})
export class UserinfoModule { }
