import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule  } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RatingListComponent } from './components/rating-list/rating-list.component';
import { GraphViewComponent } from './components/graph-view/graph-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    SidebarComponent,
    RatingListComponent,
    GraphViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
