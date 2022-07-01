interface CreateEstabelecimento {
  produtos: string[];
}

export class Estabelecimento {
  public produtos: string[];

  constructor(produtos: string[]) {
    this.produtos = produtos;
  }
}

interface Cartela {
  estampas: number;
}

interface CreateCartela extends CreateEstabelecimento {
  premiosDisponiveis: string[];
}

function MixinPremios(superClasse: typeof Estabelecimento) {
  return class extends superClasse {
    public premiosDisponiveis;

    constructor(data: CreateCartela) {
      const { produtos, premiosDisponiveis } = data;
      super(produtos);

      this.premiosDisponiveis = premiosDisponiveis;
    }

    verificacatela(cartela: Cartela, premio: string): string | void {
      if (cartela.estampas > 3) {
        return premio;
      }
    }
  };
}

class Restaurante extends MixinPremios(Estabelecimento) {}

const loja = new Estabelecimento(["arroz", "feijão"]);
console.log(loja);
const restaurante = new Restaurante({
  produtos: ["pizza", "sundae"],
  premiosDisponiveis: ["pizza"],
});

console.log(restaurante);
