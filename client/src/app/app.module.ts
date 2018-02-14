import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MovieService } from './shared/movie.service';
import { RowComponent } from './menu/row/row.component';
import { RowItemComponent } from './menu/row/row-item/row-item.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieResolver } from './shared/resolvers/movie.resolver'

const routes: Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:MenuComponent},
  {path:'movies/:id', 
    component:MovieDetailsComponent,
    resolve:{
      movie: MovieResolver
    }
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RowComponent,
    RowItemComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule 
  ],
  providers: [MovieService,MovieResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
