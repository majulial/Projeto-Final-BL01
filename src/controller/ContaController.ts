import { Produto } from "../model/Produto";
import { Repository } from "../repository/Repository";
import { colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";

//CONTA CONTROLLER CUIDA DA INTERFACE FUNCIONALIDADES (CONTA REPOSITORY)


//CONTA É UMA SUPER CONTA QUE SUPORTA TOAS (UMA CONTA GENÉRICA)

export class ContaController implements Repository{

    private listaProdutos = new Array<Produto>();

    public numero: number = 0;
    id: any;


      //MÉTODOS CRUD

    procurarPorID(id: number): void {
       const buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log(colors.fg.redstrong, `\n Produto de ID ${id} não foi encontrado!`, colors.reset);

    }



    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
   

    

    }
  
     
     procurarPorNomw(nome: string): void {

        //FILTRAGEM DOS DADOS 
        const buscaPorNome = this.listaProdutos.filter(produto =>
            produto.nome.toLocaleUpperCase().includes(nome.toUpperCase())
        );
        //LISTAGEM DOS DADOS 

        if(buscaPorNome.length > 0){
            buscaPorNome.forEach(nome => nome.visualizar());
        }else {
            console.log(colors.fg.redstrong, `Nenhuma conta foi encontrada`, colors.reset);
        }

    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.greenstrong,`O produto número ${produto.id} foi cadastrado com sucesso!`, colors.reset)
    }

    atualizar(produto: Produto): void {
            const buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto != null) {
        this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
        console.log(
            colors.fg.greenstrong,
            `\nO produto número ${produto.id} foi Atualizado com Sucesso!`,
            colors.reset
        );
    } else {
        console.log(colors.fg.red, "\nProduto não Encontrado!", colors.reset);
    }
       
    }

    deletar(id: number): void {
        const buscarProduto = this.buscarNoArray(id);
        if (buscarProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto), 1);
        console.log(colors.fg.greenstrong,`A conta foi deletada com sucesso`, colors.reset);
    }
        else
            console.log(colors.fg.redstrong, "\nConta não Encontrada\n", colors.reset);
    }



        //MÉTODOS AUXILIARES


        //GERANDO NUMERO DAS CONTAS CRIADAS
    
    public gerarID(): number{
        return ++ this.id;
    }

        public buscarNoArray(id: number): Produto | null{
            for (let produto of this.listaProdutos){
                if (produto.id === id)
                    return produto
            }
            return null;
        }
}