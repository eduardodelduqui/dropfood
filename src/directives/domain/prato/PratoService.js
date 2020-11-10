export default class PratoService {

    constructor(resource){
        this._resource = resource('lojas{/cnpj}/pratos')
    }

    lista(cnpj){
        return this._resource.query({cnpj: cnpj}).then(res => res.json());
    }

} 