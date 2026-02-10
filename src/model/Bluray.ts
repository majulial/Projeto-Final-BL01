import { Produto } from "./Produto";

export class Bluray extends Produto {

  private _filmeB: string;


  constructor(nome: string, id: number, ano: number, tipo: number, preco: number, filmeB: string) {
    super(nome, id, ano, tipo, preco);
    this._filmeB = filmeB;
  }

  public get filmeB(): string {
    return this._filmeB;
  }

  public set filmeB(value: string) {
    this._filmeB = value;
  }
  
  public visualizar(): void {
    super.visualizar();
    console.log(`Versão Bluray: ${this._filmeB}`)
  }

}