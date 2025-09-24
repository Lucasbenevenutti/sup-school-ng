import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Turma {
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

  constructor(private router: Router) {
    this.turmas = this.carregarTurmaLocalStorage();
  }

  salvar(): void {

    let turma: Turma = {
      nome:   this.nomeTurma,
      sigla:  this.siglaTurma,
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
    if(turmasLocalStorage === null) {
      return [];
    }

    let turma: Turma[] = JSON.parse(turmasLocalStorage);
    return turma;
  }

}
