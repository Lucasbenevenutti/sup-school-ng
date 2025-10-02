import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Materia {
  nome: string;
}

@Component({
  selector: 'app-lista-materias',
  imports: [RouterLink],
  templateUrl: './lista-materias.component.html',
  styleUrl: './lista-materias.component.scss'
})
export class ListaMateriasComponent {

  materias: Materia[];

  nome: string = "";

  constructor() {
    this.materias = this.carregarMateriaLocal();
  }

  salvarLocalStorage(): void {
    let enviarLocal = JSON.stringify(this.materias);

    localStorage.setItem("materias", enviarLocal);
  }

  carregarMateriaLocal(): Materia[] {
    let MateriaLocal = localStorage.getItem("materias");
    if (MateriaLocal === null) {
      return [];
    }

    let materia: Materia[] = JSON.parse(MateriaLocal);
    return materia;

  }

}
