  import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { EmprestimoCadastroRequest } from '../../models/emprestimo.dto';
import { EmprestimoService } from '../../services/emprestimo.service';
import { LivroResponse } from '../../models/livro.dto';
import { UsuarioResponse } from '../../models/usuario.dto';
import { LivroService } from '../../services/livro.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

interface Status {
  nome: string;
}

@Component({
  selector: 'app-create',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
  ],
  template: `
<div class="flex w-full mw-full justify-content-evenly gap-2 mb-2 p-3">
  <div class="flex-grow-1">
    <label for="campo-livro">Livro <span class="text-red-500">*</span></label>

    <p-select 
      [options]="livros" 
      [(ngModel)]="form.livroId"      
      optionLabel="titulo" 
      optionValue="id"
      id="campo-livro"
      [filter]="true"
      filterBy="nome" 
      placeholder="Selecione o livro" 
      class="w-full md:w-56"
      appendTo="body"/>
  </div>

  <div class="flex-grow-1">
    <label for="campo-usuario">Usuario <span class="text-red-500">*</span></label>
    <p-select 
        [options]="usuarios" 
        [(ngModel)]="form.usuarioId"      
        optionLabel="nome" 
        optionValue="id"
        id="campo-usuario"
        [filter]="true"
        filterBy="nome" 
        placeholder="Selecione o usuario" 
        class="w-full md:w-56"
        appendTo="body"/>
  </div>
  
</div>

<div class="flex w-full mw-full gap-2 mb-2 p-3">
  <div class="flex flex-column ">
    <label for="campo-data-emprestimo">Dada de empréstimo <span class="text-red-500">*</span></label>
    <p-datepicker [(ngModel)]="form.dataEmprestimo" id="campo-data-emprestimo" dateFormat="dd.mm.yy" />
  </div>

  <div class="flex flex-column">
    <label for="campo-data-devolucao">Dada de devolução <span class="text-red-500">*</span></label>
    <p-datepicker [(ngModel)]="form.dataDevolucao" id="campo-data-devolucao" dateFormat="dd.mm.yy" />

  </div>
</div>

<div class="card flex justify-center">
    <p-select [options]="statusOpcoes" optionValue="nome" [(ngModel)]="form.status" optionLabel="nome" placeholder="Selecione o status" class="w-full md:w-56" />
</div>

    <div class="flex justify-content-end mt-2">
        <p-button label="Salvar" (click)="salvar()" icon="pi pi-save" />
    </div>




  `,
  styles: ``
})
export class EmprestimoCreate {

  form: EmprestimoCadastroRequest;

  livros: LivroResponse[] | undefined;
  usuarios: UsuarioResponse[] | undefined;
  statusOpcoes: Status[] =[
    {nome: "Em andamento"},
    {nome: "Devolvido"}
  ]


  constructor(
    private emprestimoService: EmprestimoService,
    private livroService: LivroService,
    private usuarioService: UsuarioService,
    private router: Router,
  )
  {
    this.form = {
      livroId: null,
      usuarioId: null,
      dataEmprestimo: "",
      dataDevolucao: "",
      status: "",
    }
  }

  ngOnInit() {
    this.carregarLivros()
    this.carregarUsuarios()
  }

  carregarUsuarios() {
    this.usuarioService.getAll().subscribe({
      next: usuarios => this.usuarios = usuarios,
      error: erro => {
        alert("Não foi possivel carregar os usuarios");
        console.error(erro);
      }
    })
  }
  
  carregarLivros() {
    this.livroService.getAll().subscribe({
      next: livros => this.livros = livros,
      error: erro => {
        alert("Ocorreu um erro ao carregar os livros");
        console.error(erro);
      }
    })
  }

  salvar() {
    this.emprestimoService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/emprestimos"]),
      error: erro => {
        alert("Não foi possivel cadastrar o emprestimo");
        console.error(erro);
      }
    })
  }
}
