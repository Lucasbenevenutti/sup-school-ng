import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmprestimoResponse } from '../../models/emprestimo.dto';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../../services/emprestimo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TableModule, ButtonModule, CommonModule, RouterLink],
  template: `
<div class="flex justify-content-end mt-2">
    <p-button label="Cadastrar" severity="info" icon="pi pi-plus" routerLink="cadastrar" />
</div>

<p-table [value]="emprestimos" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Código</th>
            <th>Status</th>
            <th>Livro ID</th>
            <th>Usuario ID</th>
            <th>Data do Emprestimo</th>
            <th>Data da devolução</th>
        </tr>
    </ng-template>
    <ng-template #body let-emprestimos>
        <tr>
           
            <td>{{ emprestimos.id }}</td>
            <td>{{ emprestimos.status }}</td>
            <td>{{ emprestimos.livroId }}</td>
            <td>{{ emprestimos.usuarioId }}</td>
            <td>{{ emprestimos.dataEmprestimo }}</td>
            <td>{{ emprestimos.dataDevolucao }}</td>
            <td class="flex gap-2">

            </td>
        </tr>
    </ng-template>
</p-table>
  `,
  styles: ``
})
export class EmprestimoList {

  emprestimos: EmprestimoResponse[] = [];

  constructor(private emprestimoService: EmprestimoService) {}

  ngOnInit(){
    this.carregarEmprestimos()
  }

  carregarEmprestimos() {
    this.emprestimoService.getAll().subscribe({
      next: emprestimos => this.emprestimos = emprestimos,
      error: erro => {
        alert("Não foi possivel carregar os emprestimos");
        console.error(erro);
      }
    })
  }


}
