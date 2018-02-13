import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MovieService } from './shared/movie.service';
import { RowComponent } from './menu/row/row.component';
import { RowItemComponent } from './menu/row/row-item/row-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    RowComponent,
    RowItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
