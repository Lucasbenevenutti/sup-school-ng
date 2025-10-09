import { Component } from '@angular/core';
import { AutorResponse } from '../../../models/autor.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AutorService } from '../../../services/autor.service';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule, RouterLink, ButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AutorList {

  autores: AutorResponse[] = [];

  constructor(private autorService: AutorService) {

  }

  ngOnInit() {
    this.carregarAutores();
  }

  carregarAutores() {
  this.autorService.getAll().subscribe({
    next: autores => this.autores = autores,
    error: erro => {
      alert("Não foi possivel carregar os autores");
      console.error("Ocorreu um erro ao carregar os autores " + erro)
    }
  });
  }

  apagar(id: number) {
    this.autorService.delete(id).subscribe({
      next: _ => this.carregarAutores(),
      error: erro => {
        alert("Não foi possivel apagar o autor");
        console.error("Ocorreu um erro ao apagar o autor: " + erro)
      }
    })
  }
}
