import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-retangulo',
  imports: [FormsModule],
  templateUrl: './calculadora-retangulo.component.html',
  styleUrl: './calculadora-retangulo.component.scss'
})
export class CalculadoraRetanguloComponent {

  base?: number;
  altura?: number;

  calcular(): void {
    let area: number = this.base! * this.altura!;
    alert(`A area do retangulo é ${area}`)
  }
}
