import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Turma {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-lista-turmas',
  imports: [RouterLink, FormsModule],
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.scss'
})
export class ListaTurmasComponent {

  turmas: Turma[];

  constructor() {
    this.turmas = this.carregarTurmaLocalStorage()
  }

  carregarTurmaLocalStorage(): Turma[] {
    let turmasLocalStorage = localStorage.getItem("turmas");
    if (turmasLocalStorage === null) {
      return [];
    }

    let turmas: Turma[] = JSON.parse(turmasLocalStorage);
    return turmas;
  }

  salvarLocalStorage(): void {
    let turmasEnviarLocal = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasEnviarLocal);
  }
}
