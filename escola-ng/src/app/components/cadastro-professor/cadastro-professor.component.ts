import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.professores = this.carregarProfessoresLocal();
    let idParaEditar = this.activatedRoute.snapshot.paramMap.get("id");
    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();

      this.preencherCamposParaEditar();
    }
  }

  preencherCamposParaEditar(): void {
    let professor = this.professores.filter(professor => professor.id === this.idEditar)[0];
    this.nome = professor.nome;
    this.cpf = professor.cpf;
    this.dataNascimento = professor.dataNascimento;
    this.cnpj = professor.cnpj;
    this.chavePix = professor.chavePix;
    this.nomeFantasia = professor.nomeFantasia;
    this.valorHora = professor.valorHora;
    this.celular = professor.celular;
  }

  salvar(): void {

    if (this.idEditar === undefined) {
      this.cadastrarProfessor();
    } else {
      this.editarProfessor();
    }

    this.salvarLocal();
    this.router.navigate(["/professores"]);
  }

  editarProfessor(): void {
    let indiceLista = this.professores.findIndex(professor => professor.id === this.idEditar);
    this.professores[indiceLista].nome = this.nome;
    this.professores[indiceLista].cpf = this.cpf;
    this.professores[indiceLista].dataNascimento = this.dataNascimento;
    this.professores[indiceLista].cnpj = this.cnpj;
    this.professores[indiceLista].chavePix = this.chavePix;
    this.professores[indiceLista].nomeFantasia = this.nomeFantasia;
    this.professores[indiceLista].valorHora = this.valorHora!;
    this.professores[indiceLista].celular = this.celular;
  }

  cadastrarProfessor(): void {
    let professor: Professor = {
      id: crypto.randomUUID(),
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      cnpj: this.cnpj,
      chavePix: this.chavePix,
      nomeFantasia: this.nomeFantasia,
      valorHora: this.valorHora!,
      celular: this.celular,
    };
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
