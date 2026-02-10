import { Produto } from "../model/Produto";

export interface Repository{

   //MÉTODOS DO CRUD (CREATE, READ, UPDATE, DELETE)

    procurarPorID(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}
