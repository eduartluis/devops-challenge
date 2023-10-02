import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeCo from '@angular/common/locales/es'
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCo, 'es');
registerLocaleData(localeCo, 'en');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
