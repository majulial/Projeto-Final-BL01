import { Conta } from "../model/Conta";

export interface Repository{

   //MÉTODOS DO CRUD (CREATE, READ, UPDATE, DELETE)

    procurarPorID(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Conta): void;
    atualizar(produto: Conta): void;
    deletar(id: number): void;
}
