import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
  selector: 'app-cadastro-professor',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessorComponent {

  professores: Professor[];

  nome: string = "";
  cpf: string = "";
  dataNascimento: string = "";
  cnpj: string = "";
  chavePix: string = "";
  nomeFantasia: string = "";
  valorHora?: number;
  celular: string = "";

constructor(private router: Router) {
  this.professores = this.carregarProfessoresLocal();
}


  salvar(): void {

    let professor: Professor = {
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      cnpj: this.cnpj,
      chavePix: this.chavePix,
      nomeFantasia: this.nomeFantasia,
      valorHora: this.valorHora!,
      celular: this.celular,
    }

    this.professores.push(professor);
    this.salvarLocal();
    this.router.navigate(["/professores"]);

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
