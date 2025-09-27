import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface Turma {
  id: string,
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.scss'
})

export class CadastroTurmaComponent {

  turmas: Turma[];

  nomeTurma: string = "";
  siglaTurma: string = "";

  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.turmas = this.carregarTurmaLocalStorage();
    let idParaEditar = this.activatedRoute.snapshot.paramMap.get("id");
    if( idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();
      
      this.preencherCamposParaEditar();
    }
  }

  preencherCamposParaEditar(): void {
    let turma = this.turmas.filter(turma => turma.id === this.idEditar)[0]
    this.nomeTurma = turma.nome;
    this.siglaTurma = turma.sigla;
  }

  salvar(): void {

    if (this.idEditar === undefined) {
      this.cadastrarTurma();
    } else {
      this.editarTurma();
    }

    this.salvarLocalStorage();
    this.router.navigate(["/turmas"]);
  }

  editarTurma(): void {
    let indiceLista = this.turmas.findIndex(turma => turma.id === this.idEditar);
    this.turmas[indiceLista].nome = this.nomeTurma;
    this.turmas[indiceLista].sigla = this.siglaTurma;
  }

  cadastrarTurma(): void {
    
    let turma: Turma = {
      id: crypto.randomUUID(),
      nome: this.nomeTurma,
      sigla: this.siglaTurma,
    }

    this.turmas.push(turma);
    this.salvarLocalStorage();
    this.router.navigate(["/turmas"]);
  }

  salvarLocalStorage(): void {
    let turmasEnviarLocal = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasEnviarLocal);
  }

  carregarTurmaLocalStorage(): Turma[] {
    let turmasLocalStorage = localStorage.getItem("turmas");
    if (turmasLocalStorage === null) {
      return [];
    }

    let turma: Turma[] = JSON.parse(turmasLocalStorage);
    return turma;
  }

}
