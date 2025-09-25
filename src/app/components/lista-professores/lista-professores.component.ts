import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Professor {
  nome: string,
  cpf: string,
  dataNascimento: string,
  cnpj: string,
  chavePix: string,
  nomeFantasia: string,
  valorHora: number,
  celular: string,
}

@Component({
  selector: 'app-lista-professores',
  imports: [ RouterLink],
  templateUrl: './lista-professores.component.html',
  styleUrl: './lista-professores.component.scss'
})
export class ListaProfessoresComponent {

  professores: Professor[];

  constructor() {
    this.professores = this.carregarProfessoresLocal();
  }

  salvarLocal(): void {
    let EnviarProfessores = JSON.stringify(this.professores);

    localStorage.setItem("professores", EnviarProfessores);
  }

  carregarProfessoresLocal(): Professor[] {
    let professorLocal = localStorage.getItem("professores");
    if (professorLocal === null) {
      return [];
    }

    let professor: Professor[] = JSON.parse(professorLocal);
    return professor;
  }
}
