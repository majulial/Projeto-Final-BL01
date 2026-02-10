import { Conta } from "../model/Conta";
import { Repository } from "../repository/Repository";
import { colors } from "../util/Colors";

export class CatalogoController implements Repository{
        
    private listaCatalogo = new Array<Repository>();

    public id: number = 0;

     //MÉTODOS CRUD
    procurarPorID(id: number): void {
        const buscaCat = this.buscarNoArray(id);

        if(buscaCat !== null)
            buscaCat.visualizar();
        else
            console.log(colors.fg.redstrong, `\nO filme de ID ${id} não foi encontrado!`, colors.reset);

    }
    
    listarTodos(): void {
        for (let produto of this.listaCatalogo){
            produto.visualizar();
        }
    }

    cadastrar(produto: Conta): void {
        this.listaCatalogo.push(produto);
        console.log(colors.fg.greenstrong,
            `\nA Produto de ID ${produto.id} foi cadastrado com sucesso!`, colors.reset);
    }

    atualizar(produto: Conta): void {
        const buscaCat = this.buscarNoArray(produto.id);

        if(buscaCat !== null){
            this.listaCatalogo[this.listaCatalogo.indexOf(buscaCat)] = produto;
            console.log(colors.fg.greenstrong, 
                `\nA Produto de ID ${produto.id} foi atualizado com sucesso!`, colors.reset);
        }else
            console.log(colors.fg.redstrong, `\nO filme de ID ${filme.id} não foi encontrado!`, colors.reset);
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if(buscaCat !== null){
            this.listaCatalogo.splice(this.listaCatalogo.indexOf(buscaCat), 1);
            console.log(colors.fg.greenstrong, 
                `\nA Produto de ID ${id} foi deletado com sucesso!`, colors.reset);
        }else
            console.log(colors.fg.red, `\nO filme de ID ${id} não foi encontrado!`, colors.reset);
    }

  //MÉTODOS AUXILIARES


        //GERANDO NUMERO DAS CONTAS CRIADAS
    
    public gerarID(): number{
        return ++ this.id;
    }

    public buscarNoArray(id: number): Conta | null {
        for (let produto of this.listaCatalogo){
            if (produto.id === id)
                return produto
        }

        return null;
    }
}