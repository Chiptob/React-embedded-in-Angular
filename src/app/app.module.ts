import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomReactWrapper } from 'src/components/custom-react/custom-react-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    CustomReactWrapper,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
