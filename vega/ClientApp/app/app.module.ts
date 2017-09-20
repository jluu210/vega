import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { HomeComponent } from "./components/home/home.component";


@NgModule({
  declarations: [
      AppComponent,
      NavMenuComponent,
      CounterComponent,
      FetchDataComponent,
      HomeComponent,
      VehicleFormComponent
  ],
  imports: [
      RouterModule.forRoot([
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'vehicles/new', component: VehicleFormComponent },
          { path: 'home', component: HomeComponent },
          { path: 'counter', component: CounterComponent },
          { path: 'fetch-data', component: FetchDataComponent },
          { path: '**', redirectTo: 'home' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
