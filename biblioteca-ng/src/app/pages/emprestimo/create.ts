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

<div class="flex w-full mw-full justify-content-evenly gap-2 mb-2 p-3">
  <div class="flex-grow-1">
    <label for="campo-ano-publicacao">Ano Publicação <span class="text-red-500">*</span></label>
    <p-datepicker [(ngModel)]="form.dataEmprestimo" dateFormat="dd.mm.yy" />
  </div>
</div>

  `,
  styles: ``
})
export class EmprestimoCreate {

  form: EmprestimoCadastroRequest;

  livros: LivroResponse[] | undefined;
  usuarios: UsuarioResponse[] | undefined;


  constructor(
    private emprestimoService: EmprestimoService,
    private livroService: LivroService,
    private usuarioService: UsuarioService,
  )
  {
    this.form = {
      livroId: 4,
      usuarioId: 5,
      dataEmprestimo: new Date ("1998-01-01"),
      dataDevolucao: new Date ("1998-01-01"),
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



  salvar() {}
}
