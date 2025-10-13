import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioCadastroRequest, UsuarioResponse } from '../models/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/usuarios"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UsuarioResponse[]> {
    return this.httpClient.get<UsuarioResponse[]>(this.url);
  }

  create(form: UsuarioCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form)
  }


}
