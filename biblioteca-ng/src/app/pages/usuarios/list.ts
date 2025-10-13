import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { UsuarioResponse } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list',
  imports: [TableModule, ButtonModule, RouterLink, CommonModule],
  template: `

<div class="flex justify-content-end mt-2">
        <p-button label="Cadastrar" severity="info" icon="pi pi-plus" routerLink="cadastrar" />
</div>

<p-table [value]="usuarios" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Endereço</th>
        </tr>
    </ng-template>
    <ng-template #body let-usuarios>
        <tr>
            <td>{{ usuarios.id}}</td>
            <td>{{ usuarios.nome }}</td>
            <td>{{ usuarios.email }}</td>
            <td>{{ usuarios.telefone }}</td>
            <td>{{ usuarios.endereco }}</td>

            <td class="flex gap-2">
                <!-- Depois será adicionado os botões -->
            </td>
        </tr>
    </ng-template>
</p-table>
  `,
  styles: ``
})
export class UsuarioList {

  usuarios: UsuarioResponse[] = [];

  constructor(private usuarioService: UsuarioService ) {}

  ngOnInit() {
    this.carregarUsuarios();
  }


 private carregarUsuarios() {
    this.usuarioService.getAll().subscribe({
      next: usuarios => this.usuarios = usuarios,
      error: erro => {
        alert("Não foi possivel carregar a lista de usuarios");
        console.error("Ocorreu um erro ao carregar a lista de Usuarios" + erro)
      }
    });  
  }

}
