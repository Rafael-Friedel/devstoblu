import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('hello world')
  }
  title = 'novo';



  private calculadora = (array : number[]) => console.log(array.reduce((acc, curr) => acc + curr, 0) / array.length);
  

  private verificaString = (string: string) => {
    const part1 : string = string === "desvs2blu" ? `Sim é ${string}` : `Não é devs2blu, é ${string}`
    const countCaracters : number = string.length;

    return console.log(`${part1}, e possui ${countCaracters} caracteres`);
  }

  private calculaJuros = (capital: number, taxa: number, meses: number) => {
    const taxaJurosDecimal = taxa / 100;
    const n = 12;
    const montante = capital * Math.pow(1 + taxaJurosDecimal / n, n * meses);
    return console.log(`Montante total após ${meses} meses: ${montante.toFixed(2)}`);
    
  }

  private contaVogaisConsoantes = (string : string) : void => {
    type Acc = {
      vogal: number;
      consoante:number;
    }
    const myStringInArray = [...string];
    const countCaracters : Acc = myStringInArray.reduce((acc: Acc, curr: string) => {
      const vogais = 'aeiou'
      vogais.includes(curr) ? acc.vogal += 1 : acc.consoante +=1;
      return acc;
    }, { vogal: 0, consoante: 0 })
    
    return console.log(`A sua string possui ${countCaracters.vogal} vogais, e ${countCaracters.consoante} consoantes`);
    
  }
}
