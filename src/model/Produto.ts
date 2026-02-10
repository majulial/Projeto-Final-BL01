import { formatarMoeda } from "../util/Currency";

export abstract class Produto {


  private _nome: string;
  private _id: number;
  private _ano: number;
  private _tipo: number;
  private _preco: number;



	constructor(nome: string, id: number, ano: number, tipo: number, preco: number) {
		this._nome = nome;
		this._id = id;
		this._ano = ano;
		this._tipo = tipo;
		this._preco = preco;
	}



	public get nome(): string {
		return this._nome;
	}

	public get id(): number {
		return this._id;
	}

	public get ano(): number {
		return this._ano;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set ano(value: number) {
		this._ano = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}



      public visualizar(): void {

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "DVD";
            break;
            case 2:
                tipo = "DVD Bluray";
            break;
            default:
                tipo = "Tipo Inválido";
        }

        console.log("\n************************************");
        console.log("        Dados do Catálogo              ");
        console.log("************************************");
        console.log(`Nome do produto: ${this._nome}`);
        console.log(`Ano: ${this._ano}`);
        console.log(`Id do produto: ${this._id}`);
        console.log(`Tipo do produto: ${tipo}`);
        console.log(`Preço: ${formatarMoeda(this._preco)}`);
    }


}