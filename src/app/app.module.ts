import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './core/pipe/search.pipe';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchPipe,
    ChartComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,

    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
