import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-media',
  imports: [FormsModule],
  templateUrl: './calculadora-media.component.html',
  styleUrl: './calculadora-media.component.scss'
})
export class CalculadoraMediaComponent {

  nota1?: number;
  nota2?: number;
  nota3?: number;

  media(): void { 
    let media: number = (this.nota1! + this.nota2! + this.nota3!) / 3;

    if(media >= 7) {
      alert(`Média das notas dos alunos é: ${media.toFixed(2)} Aprovado`);
    } else if (media < 7) {
      alert(`Média das notas dos alunos é: ${media.toFixed(2)} Reprovado`);
    };
  }
}
