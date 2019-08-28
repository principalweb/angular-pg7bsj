import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { ColorPickerModule } from 'ngx-color-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { reducer } from './figure.reducer';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ColorPickerModule, 
    BrowserAnimationsModule, 
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,

    StoreModule.forRoot({ figure: reducer })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
