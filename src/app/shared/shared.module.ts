import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProductTemplateComponent } from './product-template/product-template.component';


@NgModule({
  declarations: [
    ProductTemplateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    ProductTemplateComponent,
  ]
})
export class SharedModule { }
