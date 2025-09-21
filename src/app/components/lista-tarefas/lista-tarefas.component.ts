import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.scss'
})
export class ListaTarefasComponent {

  tarefaFora: string = "";
  tarefas: Array<string> = [];

  adicionar(): void {
    let tarefa: string = this.tarefaFora;
    this.tarefas.push(tarefa);
    this.tarefaFora = "";
  }

  apagar(tarefasParaApagar: string): void {
    let indiceParaApagar = this.tarefas.indexOf(tarefasParaApagar);
    console.log('Tarefa:', tarefasParaApagar);
    console.log('Índice encontrado:', indiceParaApagar);


    this.tarefas.splice(indiceParaApagar, 1);


  }
}
