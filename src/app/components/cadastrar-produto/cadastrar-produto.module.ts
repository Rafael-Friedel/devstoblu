import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { CadastrarRoutingModule } from './cadastrar-produto-routing.module';


@NgModule({
  declarations: [CadastrarProdutoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CadastrarRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class CadastrarProdutoModule { }
