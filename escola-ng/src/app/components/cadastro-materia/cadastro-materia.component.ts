import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Materia {
  nome: string;
}

@Component({
  selector: 'app-cadastro-materia',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-materia.component.html',
  styleUrl: './cadastro-materia.component.scss'
})
export class CadastroMateriaComponent {

  materias: Materia[];

  nome: string = "";

  constructor(private router: Router) {
    this.materias = this.carregarMateriaLocal();
  }


  salvar(): void {
    let materia: Materia = {
      nome: this.nome,
    }

    this.materias.push(materia);
    this.salvarLocalStorage()
    this.router.navigate(["/materias"])
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
