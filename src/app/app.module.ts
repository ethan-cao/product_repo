import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // define components that belong to this module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  // external components that are available to all components in this module
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
