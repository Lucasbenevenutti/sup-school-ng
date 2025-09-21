import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { CalculadoraRetanguloComponent } from './components/calculadora-retangulo/calculadora-retangulo.component';
import { CalculadoraMediaComponent } from './components/calculadora-media/calculadora-media.component';
import { CalculadoraTemperaturaComponent } from './components/calculadora-temperatura/calculadora-temperatura.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

export const routes: Routes = [
    {path: "calculadora", component: CalculadoraComponent},
    {path: "lista-pessoas", component: ListaPessoasComponent},
    {path: "calculadora-retangulo", component: CalculadoraRetanguloComponent},
    {path: "calculadora-media", component: CalculadoraMediaComponent},
    {path: "calculadora-temperatura", component: CalculadoraTemperaturaComponent},
    {path: "lista-tarefas", component: ListaTarefasComponent}
];
