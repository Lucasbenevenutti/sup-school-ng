import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Professor {
  id: string,
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

  constructor(private router: Router) {
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

  apagar(professor: Professor): void {
    let indiceParaApagar = this.professores.indexOf(professor);
    this.professores.splice(indiceParaApagar, 1);
    this.salvarLocal();
  }

  editar(professor: Professor): void {
    this.router.navigate([`/professores/editar/${professor.id}`])

  }
}
