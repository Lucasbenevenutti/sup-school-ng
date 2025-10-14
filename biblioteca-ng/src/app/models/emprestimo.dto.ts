export interface EmprestimoCadastroRequest {
    livroId: number | null;
    usuarioId: number | null;
    dataEmprestimo: Date | null
    dataDevolucao: Date | null;
    status: string;
}

export interface EmprestimoResponse {
    id: string;
    livroId: EmprestimoLivroResponse;
    usuarioId: EmprestimoUsuarioResponse;
    dataEmprestimo: string;
    dataDevolucao: string;
    status: string;
}

export interface EmprestimoLivroResponse {
    id: number;
    titulo: string;
    autorId: EmprestimoAutorResponse;
    categoriaId: EmprestimoCategoriaResponse;
    anoPublicacao: Date | null;
    isbn: string;
    quantidade: number | null;
    descricao: string;
    resumo: string;
}

export interface EmprestimoAutorResponse {
    id: number;
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
}

export interface EmprestimoCategoriaResponse {
    id: number;
    nome: string;
}

export interface EmprestimoUsuarioResponse {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
}
