import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlatsListComponent } from './plats-list/plats-list.component';
import { PlatDetailsComponent } from './plat-details/plat-details.component';
import { PlatService } from './service/plat.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlatsListComponent,
    PlatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
