<template>
    <div>
        <div>
        
        </div> 
        <div class="corpo">
            <b-button class="botao-adicionar-prato" v-b-modal.modal-adicionar-prato><b-icon-plus-circle class="add-icon"></b-icon-plus-circle><span>Adicionar Prato</span></b-button>
            <Cardapio :id_loja="idLoja" editable></Cardapio>

           
            <b-modal id="modal-adicionar-prato" size="md" title="Adicionar Prato" centered no-stacking hide-footer>
                <AdicionarPrato @prato-adicionado="buscaUltimoPrato()" :idLoja="idLoja" :sections="secoes" />
            </b-modal>
            <b-modal id="modal-confirma-prato" ref="my-modal" size="md" title="Prato Adicionado" centered no-stacking header-bg-variant="success" header-text-variant="light">
                <EditDishScreen @adiciona-item="abreTelaAdicionarItem()" :prato="ultimoPrato"/>
                <template #modal-footer>
                    <b-button @click="$refs['my-modal'].hide();" class="botao-adicionar-itens" variant="danger">Ok</b-button>
                </template>
            </b-modal>
        </div>
    </div>
</template>



<script>

import DishGroup from '../../components/DishGroup'
import PratoService from '../../directives/domain/prato/PratoService'
import AdicionarPrato from './AdicionarPrato'
import AdicionarItensAdicionais from './AdicionaItensAdicionais'
import EditDishScreen from './EditDishScreen'
import Cardapio from '../../components/Cardapio'

export default {

    components: {
        DishGroup,
        AdicionarPrato,
        AdicionarItensAdicionais,
        EditDishScreen,
        Cardapio
    },

    data() {
        return {
            idLoja: parseInt(this.$route.params.id),
            secoes: '',
            pratos: '',
            ultimoPrato: '',
        }
    },

    created () {
        this.pratoService = new PratoService(this.$resource)

        let id = this.idLoja

        this.pratoService.lista(id)
				.then((pratos) => {this.pratos = pratos;})     
                .then(() => {
        this.$http.get(`lojas/${id}/sections`)
                .then((res) => res.json())
                .then((sections) => {this.secoes = sections})
                })
    },

    methods: {


        abreTelaConfirma() {
            this.$refs['my-modal'].show()
        },

        abreTelaAdicionarItem(){
            this.$refs['modal-adicionar-itens'].show()
        },

        buscaUltimoPrato(){
            this.$http.get(`lojas/${this.idLoja}/pratos/ultimo`)
                .then((res) => res.json())
                .then(((ultimoPrato) => this.ultimoPrato = ultimoPrato))

        },
    },

    watch: {
            ultimoPrato(newValue, oldValue) {
                this.abreTelaConfirma()
            }
        },


   

}
</script>

<style scoped>

.corpo
{
    padding: 10px 10px;
    margin: 0px;
    width: 100%;
}

.corpo-editar-cardapio
{
    width: 100%;
}

.botao-adicionar-prato
{
    font-size: 14px;
    display: block;
    border: none;
    background-color: transparent;
    color: black;
}

.botao-adicionar-prato:focus{
    outline: none;
    border: none;
}

.add-icon
{
    margin: 0px 5px;
}



.dish-group
{
    border-bottom: 1px solid rgba(176, 58, 50, 0.25);
}

.dish-group:first-child
{
    border-top: 1px solid rgba(176, 58, 50, 0.25);
}




@media (min-width: 800px){

    .grid
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    .formulario{
        width: 50%;
        margin: 0 auto;
    }

}

@media (max-width: 800px){
    
}



</style>