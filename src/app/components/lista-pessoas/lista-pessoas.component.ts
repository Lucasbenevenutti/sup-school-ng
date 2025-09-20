import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-pessoas',
  imports: [FormsModule],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.scss'
})
export class ListaPessoasComponent {
  nome: string = "";
  sobrenome: string = "";
  pessoas: Array<string> = []; // criando uma lista
  
  adicionar(): void{
    let pessoa = `${this.nome} ${this.sobrenome}`;
    this.pessoas.push(pessoa);
    this.nome = "";
    this.sobrenome = "";
  }

  apagar(pessoasParaApagar: string): void {
    let indiceParaApagar = this.pessoas.indexOf(pessoasParaApagar);
    this.pessoas.splice(indiceParaApagar);
  }
}
