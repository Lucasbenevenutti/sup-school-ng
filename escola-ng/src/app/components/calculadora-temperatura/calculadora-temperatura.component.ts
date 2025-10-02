import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-temperatura',
  imports: [FormsModule],
  templateUrl: './calculadora-temperatura.component.html',
  styleUrl: './calculadora-temperatura.component.scss'
})
export class CalculadoraTemperaturaComponent {

  valor?: number;
  resultado?: number;

  kelvinFahrenheit(): void {
    let conversao: number = (this.valor! - 273.15) *9/5 + 32;
    this.resultado = conversao;
    alert(`O resultado da conversao de Kelvin para Fahrenheit é de: ${this.resultado.toFixed(2)}`);
  }

  fahrenheitKelvin(): void {
    let conversao: number = (this.valor! - 32) * 5/9 + 273.15;
    this.resultado = conversao;
    alert(`O resultado da conversao de fahrenheit para kelvin é de ${this.resultado.toFixed(2)}`);
  }

  kelvinCelsius(): void {
    let conversao: number = this.valor! - 273.15;
    this.resultado = conversao;
    alert(`O resultado da conversao de kelvin para celsius é de ${this.resultado.toFixed(2)}`);
  }

  celsiusKelvin(): void {
    let conversao: number = this.valor! + 273.15;
    this.resultado = conversao;
    alert(`O resultado da conversao de celsius para kelvin é de ${this.resultado.toFixed(2)}`);
  }

  fahrenheitCelsius(): void {
    this.resultado = (this.valor! - 32) * 5/9;
    alert(`O resultado da conversao de fahrenreit para celsius é de ${this.resultado.toFixed(2)}`);
  }

  celsiusFahrenheit(): void {
    this.resultado = (this.valor! * 9/5) + 32;
    alert(`O resultado da conversao de celsius para fahrenheit é de ${this.resultado.toFixed(2)}`);
  }
}
