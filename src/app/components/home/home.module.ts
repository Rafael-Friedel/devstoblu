import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ServicesModule } from 'src/app/@core/services/services.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    HttpClientModule 
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
