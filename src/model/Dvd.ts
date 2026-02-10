import { Produto } from "./Produto";

export class DVD extends Produto {

  private _filme: string;


	constructor(nome: string, id: number, ano: number, tipo: number, preco: number, filme: string) {
    super(nome, id, ano, tipo, preco);
		this._filme = filme;
	}

	public get autor(): string {
		return this._filme;
	}

	public set autor(value: string) {
		this._filme = value;
	}
  
  public visualizar(): void {
    super.visualizar();
    console.log(`Filme: ${this._filme}`)
  }

}