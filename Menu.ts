import { Input } from "./src/util/Input";
import { colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";


export function main() {

    let opc: number;

    //criarContasTeste();

    while (true) {

        console.log(colors.bg.magentabright, colors.fg.yellow,
                "=================================================")
        console.log("||              SWETNESS LOCADORA              ||")
        console.log("=================================================")
        console.log("||                                             ||")
        console.log("||           1 - Inserir dvd                   ||")
        console.log("||           2 - Listar todos os dvds          ||")
        console.log("||           3 - Buscar produto por id         ||")
        console.log("||           4 - Atualizar dados do produto    ||")
        console.log("||           5 - Apagar produto                ||")
        console.log("||           0 - Sair                          ||")
        console.log("=================================================",
            colors.reset
        )



        console.log("Digite a operação desejada: ")
        opc = Input.questionInt("");
        keyPress();

        if (opc === 0) {
            criacao();
        }


        switch (opc) {

            case 1:
                console.log("\n\nCriar Produto\n\n");
              
                keyPress()

                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");
    
                keyPress()

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
           
                keyPress()

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
              
                keyPress()

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
            
                keyPress()

                break;
            case 6:
                console.log("\n\nSaque\n\n");
            
                keyPress()

                break;
          
            default:
                console.log("\nOpção Inválida!!\n");
        }

        //PAUSAS ENGTREA AS OPÇÕES

        function keyPress(): void {
            console.log("\nPressione enter para continuar...");
            Input.prompt();
        }

        function criacao(): void {
    console.log("\n=========================================================")
    console.log("\n                                                         ")
    console.log("❀  Projeto Desenvolvido por: Júlia de Lima dos Santos    ❀");
    console.log("\ngithub.com/majulial");
    console.log("Generation Brasil - generation@generation.org");
    console.log("\n=========================================================")
}

    }
}

main();
