import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './';
import { NavComponent } from './nav';
import { HomeContentComponent } from './home-content';
import { WriteNoteComponent } from '../write-note/write-note.component';
import { ShowPhotosComponent } from '../show-photos/show-photos.component';
import { SettingComponent } from '../setting/setting.component';
import { LoginComponent } from '../login/login.component';
import { TranslateModule } from 'ng2-translate';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Ng2Echarts } from 'ng2-echarts';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    Ng2Echarts,
    LoginComponent,
    SettingComponent,
    HomeComponent,
    NavComponent,
    HomeContentComponent,
    WriteNoteComponent,
    ShowPhotosComponent,
    SearchComponent]
})
export class HomeModule { }
