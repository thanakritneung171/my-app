import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes  } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
  { path:'',component: HOMEComponent },
      { path:'about',component: ABOUTComponent },
      { path:'contact',component: ContactComponent },
      { path:'product',component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    ABOUTComponent,
    ContactComponent,
    ProductComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule

  ],exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
