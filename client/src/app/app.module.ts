import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MovieService } from './shared/movie.service';
import { RowComponent } from './menu/row/row.component';
import { RowItemComponent } from './menu/row/row-item/row-item.component';

const routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', conponent: RowComponent },
   { path: 'movie/:id', component: RowItemComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
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
