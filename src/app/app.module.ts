import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { AtmComponent } from './atm/atm.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    AtmComponent,
    ForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
