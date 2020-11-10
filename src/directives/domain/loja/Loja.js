
export default class Loja{

    constructor(nome = '', tipo = null, imagem = '', descricao = '', bairro = '', frete = '', horarioAbre = '',
     horarioFecha = '', cnpj = '', cep = '', logradouro = '', cidade = '', estado = '', latitude = '', longitude = '', nomeDono, email){

        this.nome = nome;
        this.tipo = tipo;
        this.imagem = imagem;
        this.descricao = descricao;
        this.bairro = bairro; 
        this.frete = frete;
        this.horarioAbre = horarioAbre;
        this.horarioFecha = horarioFecha;
        this.cnpj = cnpj;
        this.cep = cep;
        this.logradouro = logradouro; 
        this.cidade = cidade;  
        this.estado = estado;  
        this.latitude = latitude; 
        this.longitude = longitude;
        this.nomeDono = nomeDono;
        this.email = email;

    }
}