import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

// Module is class, decorated by @NgModule, it provides context for template resolution
@NgModule({
  // external components that are available to all components in this module
  imports: [
    BrowserModule,  // BrowserModule should be imported to root application module, AppModule
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'Welcome', pathMatch: 'full' },
      ],
      { useHash: false }
    ),
    ProductModule,
  ],
  exports: [
    // export any declared components/directives/pipes that can be imported by another module
  ],
  // define components/directives/pipes that belong to this module
  // each component/directive/pipes must belong to one and only one module
  // all the declared component/directive/pipes are only accessible to others declared in the same module
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  // every application bootstrap at least 1 component, the root component
  // bootstrap array should only be used in root application module, AppModule
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
