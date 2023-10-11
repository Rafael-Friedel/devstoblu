import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  public formularioProduto: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm = () =>  {
    this.formularioProduto = this.formBuilder.group({
      name: '',
      description: '', 
      code: '',
      time: '',
      'cost-price': 0,
      'sale-price': 0,
      'product-type': ''
    })
  }

  enviarForm = () => {
    console.log(this.formularioProduto.value);
    
  }
}
