import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyComponent } from './currency.component';
import { RootComponent } from './root.component';
import { OnlyNumber } from './validation.directive';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export class MaterialModule {}

@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    ],
    
  declarations: [ CurrencyComponent,RootComponent,OnlyNumber],
  bootstrap: [RootComponent,CurrencyComponent],
  providers: []
})

export class CurrencyModule {}

