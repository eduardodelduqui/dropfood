export default class LojaService {

    constructor(resource){
        this._resource = resource('lojas{/nome}')
    }

    lista(){
        return this._resource.query().then(res => res.json());
    }

    buscaPorNome(nome){
        return this._resource.get(nome).then(res => res.json());
    }

    buscaPorCategoria(categoria){
        return this._resource.get(`/categoria/${categoria}`).then(res => res.json());
    }



}