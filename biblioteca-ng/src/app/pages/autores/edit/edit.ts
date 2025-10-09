import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutorEditarRequest } from '../../../models/autor.dto';
import { AutorService } from '../../../services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

interface Nacionalidade {
  nome: string;
}

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ButtonModule, InputTextModule, SelectModule, DatePickerModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class AutorEdit {

  form: AutorEditarRequest;
  id: number;

  nacionalidades: Nacionalidade[] = [
    { nome: "Argentino" },
    { nome: "Boliviano" },
    { nome: "Brasileiro" },
    { nome: "Chileno" },
    { nome: "Colombiano" },
    { nome: "Equatoriano" },
    { nome: "Guyanês" },
    { nome: "Paraguaio" },
    { nome: "Peruano" },
    { nome: "Surinamês" },
    { nome: "Uruguaio" },
    { nome: "Venezuelano" }
  ];

  constructor(
    private autorService: AutorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.form = {
      nome: "",
      nacionalidade: "",
      dataNascimento: "",
    };
      this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString())
      this.carregarAutor();
  }
  
  carregarAutor() {
    this.autorService.getById(this.id).subscribe({
      next: autor => {
        this.form.nome = autor.nome;
        this.form.dataNascimento = autor.dataNascimento;
        this.form.nacionalidade = autor.nacionalidade
      },
      error: erro => {
        alert("Não foi possivel carregar o autor");
        console.error(erro);
      }
    })
  }

  editar(){
    this.autorService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/autores"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar o autor")
      }
    })
  }
}
