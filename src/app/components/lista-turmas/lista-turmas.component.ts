import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Turma {
  id: string,
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

  constructor(private  router: Router) {
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

  apagar(turma: Turma): void {
    let indiceParaApagar = this.turmas.indexOf(turma);
    this.turmas.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  editar(turma: Turma): void {
    this.router.navigate([`/turmas/editar/${turma.id}`])
  }
}
