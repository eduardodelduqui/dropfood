
export default class Prato {

    constructor(id_loja, nome = '', descricao = '', imagem = '', tipo = '', preco = '', secao_id = 0, secao_nome = null, cnpj = ''){
        this.id_loja = id_loja;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.tipo = tipo;
        this.preco = preco;
        this.secao_id = secao_id;
        this.secao_nome = secao_nome;
        this.cnpj = cnpj;
    }
}