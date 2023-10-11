import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './produto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProdutoService]
})
export class ServicesModule { }
