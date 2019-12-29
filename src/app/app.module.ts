import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ResultComponent } from './dialogs/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {provide: 'baseUrl', useValue: 'http://flask-again-try.tw1.ru/'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ResultComponent
  ]
})
export class AppModule { }
