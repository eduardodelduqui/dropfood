<template>
    <section>
        <b-img class="img-modal"  :src='prato.imagem' alt="Imagem do prato"></b-img>
        <h3 class="title-dish-modal">{{prato.nome}}</h3>
        <p class="description-dish-modal">{{prato.descricao}}</p>
        <p class="price-dish">R$ {{prato.preco.toFixed(2)}}</p>
        <button @click="$refs['modal-adicionar-itens'].show()" class="button-add-item">
            <b-icon-plus-circle class="add-icon"></b-icon-plus-circle>
            Itens Adicionais
        </button>
        <div class="aditional-items-list">
            <ul>
                <li class="aditional-item" v-for="item of itensAdicionais">
                    <div class="aditional-item-grid">
                        <div>
                            <p class="aditional-item-title">{{item.nome}}</p>
                            <span class="aditional-item-description">{{item.descricao}}</span>
                            <span v-if="item.preco > 0" class="aditional-item-price">R$ {{item.preco.toFixed(2)}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <section class="modal-add-itens">
            <b-modal ref="modal-adicionar-itens" title="Adicionar Itens" centered hide-footer>
                <AdicionarItensAdicionais @item-adicionado="$refs['modal-adicionar-itens'].hide()" :idLoja="prato.id_loja" :idPrato="prato.id" />
            </b-modal>
        </section>
    </section>
</template>

<script>

import AdicionarItensAdicionais from './AdicionaItensAdicionais'

export default {

    props: {
        prato: {
            type: Object,
            required: true
        },
    },

    components: {
        AdicionarItensAdicionais,
    },


    data() {
        return {
            itensAdicionais: ''
        }
    },

    created() {
        let idPrato = this.prato.id
        this.$http.get(`adicionais/prato/${idPrato}`)
            .then((res) => res.json())
            .then((itensAdicionais) => this.itensAdicionais = itensAdicionais)

    },

    methods: {
        abreTelaAdicionar() {
            this.$refs['modal-adicionar-itens'].show()
        }

    },


}
</script>

<style>

section
{
    padding: 10px;
}

.img-modal
{
    width: 100%;
    margin: 0 auto; 
    border-radius: 5px;
}

.title-dish-modal
{
    font-size: 18px;
    margin: 10px 0px;
}

.description-dish-modal
{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #717171;
}

.price-dish
{
    font-family: Arial, Helvetica, sans-serif;    
}

.aditional-item
{
    padding: 15px 0px;
    border-bottom: 1px rgba(187, 186, 186, 0.185) solid
}

.aditional-item-title
{
    margin: 0px;
    font-size: 1rem;
    color: #3f3e3e
}

.aditional-item-description, .aditional-item-price
{
    display: block;
    margin-top: 4px;
    font-weight: 300;
    font-size: 0.9rem;
    
}

.aditional-item-description
{
    color: #717171;
}

.aditional-item-price
{
    font-family: Arial, Helvetica, sans-serif;
}

.aditional-item-grid
{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 80px;
}

.button-adicionar
{
    position: relative;
}

.button-adicionar span{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 30px;
    color: #B03A32;
    cursor: pointer;
}

.button-add-item
{
    background-color: transparent;
    border: none;
    color: #DC3545;
    padding: 0px;
}

button
{
    color: 0px;
}



</style>