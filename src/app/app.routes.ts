import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { CalculadoraRetanguloComponent } from './components/calculadora-retangulo/calculadora-retangulo.component';
import { CalculadoraMediaComponent } from './components/calculadora-media/calculadora-media.component';
import { CalculadoraTemperaturaComponent } from './components/calculadora-temperatura/calculadora-temperatura.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { ListaAlunosComponent } from './components/lista-alunos/lista-alunos.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { ListaTurmasComponent } from './components/lista-turmas/lista-turmas.component';
import { CadastroTurmaComponent } from './components/cadastro-turma/cadastro-turma.component';
import { ListaMateriasComponent } from './components/lista-materias/lista-materias.component';
import { CadastroMateriaComponent } from './components/cadastro-materia/cadastro-materia.component';

export const routes: Routes = [
    {path: "calculadora", component: CalculadoraComponent},
    {path: "lista-pessoas", component: ListaPessoasComponent},
    {path: "calculadora-retangulo", component: CalculadoraRetanguloComponent},
    {path: "calculadora-media", component: CalculadoraMediaComponent},
    {path: "calculadora-temperatura", component: CalculadoraTemperaturaComponent},
    {path: "lista-tarefas", component: ListaTarefasComponent},
    {path: "alunos", component: ListaAlunosComponent},
    {path: "alunos/cadastro", component: CadastroAlunoComponent},
    {path: "turmas", component: ListaTurmasComponent},
    {path: "turmas/cadastro", component: CadastroTurmaComponent},
    {path: "materias", component: ListaMateriasComponent},
    {path: "materias/cadastro", component: CadastroMateriaComponent}
];
