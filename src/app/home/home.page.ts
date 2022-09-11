import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  resultado;

  somar(formu){
    let num1 = formu.value.n1;
    let num2 = formu.value.n2;
    this.resultado = parseFloat(num1) + parseFloat(num2);
  }


  subtrair(formu){
    let num1 = formu.value.n1;
    let num2 = formu.value.n2;
    this.resultado = parseFloat(num1) - parseFloat(num2);
  }

  multiplicar(formu){
    let num1 = formu.value.n1;
    let num2 = formu.value.n2;
    this.resultado = parseFloat(num1) * parseFloat(num2);
  }

  dividir(formu){
    let num1 = formu.value.n1;
    let num2 = formu.value.n2;
    this.resultado = parseFloat(num1) / parseFloat(num2);
  }
}