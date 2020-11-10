<template>
    <div class="dish-body">
        <button v-show="editable" @click="excluiPrato(prato.id)" class="button-remove"><b-icon-trash font-scale="1.5"></b-icon-trash></button>
        <div @click="showModal" class="dish-card" :class="{active: hover}">
            <div class="dish-info">
                <div class="dish-info-top">
                    <h3 class="title-dish">{{prato.nome}}</h3>
                    <div class="descricao">
                        <span style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 2;">{{prato.descricao}}</span>
                    </div>
                </div>
                <span class="dish-preco">R$ {{prato.preco.toFixed(2)}}</span>
            </div>
            <div>
                <b-img class="imagem" :src='prato.imagem' alt="Imagem do prato"></b-img>
            </div>
            <section class="modal">
                <b-modal class="modal-aditional-items" ref="my-modal" size="md" scrollable title="Adicionar no carrinho">
                    <EditDishScreen v-if="editable" @adiciona-item="adicionaItem" :editable="editable" :prato="prato" />
                    <DishScreen v-else @adiciona-item="adicionaItem" :editable="editable" :prato="prato" />
                    <template #modal-footer>
                        <b-button @click="hideModal()" v-if="editable" size="md" variant="danger">
                            Ok
                        </b-button>
                        <b-button v-else class="modal-button-add" size="md" variant="danger" disabled>
                            Adicionar
                            <span>R$ {{prato.preco.toFixed(2)}}</span>
                        </b-button>
                    </template>
                </b-modal>
            </section>
        </div>
    </div>
</template>



<script>

import DishScreen from './DishScreen'
import EditDishScreen from '../views/editar/EditDishScreen'

export default {

    props: {
        prato: {
            type: Object,
            required: true 
        },

        hover: {
            type: Boolean,
            required: false
        },

        modal: {
            type: Boolean,
            required: false
        },
        
        editable: {
            type: Boolean,
            required: false
        }


    },

    components: {
        DishScreen,
        EditDishScreen
    },

    data() {
        return {
        }
    },

    methods: {
        nome(prato) {
            console.log(prato);
        },

        showModal() {
            if(this.modal)
                this.$refs['my-modal'].show();
        },

        hideModal(){
            this.$refs['my-modal'].hide();
        },

        adicionaItem(idPrato){
            this.$emit('adiciona-item', idPrato);
            console.log(idPrato);
        },

        excluiPrato(id){
            if(confirm("Tem certeza que deseja deletar o prato?")){
                this.$http.delete(`pratos/${id}`)
                .finally(() => this.$emit('prato-removido', id));
            }
        }
    },
}
</script>

<style scoped>

*{
    box-sizing: border-box;
}

.title-dish{
    font-size: 18px;
    color: #3e3e3e;
    margin-bottom: 16px;
    font-weight: 300;
}

.dish-body
{
    position: relative;
}

.dish-card{
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 15px;
    width: 100%;
    border: 1px solid rgba(209, 209, 209, 0.5);
    padding: 10px;
    min-height: 147px;
    max-height: 190px;
    border-radius: 5px;
    min-width: 300px;
    cursor: pointer;
}

.active:hover{
    border-color: rgb(190, 190, 190);
    transition: 0.3s;
}



.dish-info{
    display: grid;
    grid-template-rows: 1fr 20px;
    height: 100%;
    overflow: hidden;
}

.dish-info-top{
    display: inline;
    grid-row: 1;
}

.descricao{
    font-size: 12px;
    height: 38px;
}

.imagem{
    border-radius: 5px;
    object-fit: cover;
    width: 120px;
    height: 90px;
}

.dish-preco{
    font-size: 16px;
    color: #3E3E3E;
    font-weight: 300;
}

.modal
{
    height: 0px;
}

.modal-button-add
{
    display: flex;
    justify-content:space-between;
    width: 220px;
    font-size: 14px;
    padding: 10px 20px;
}

.button-remove
{
    position: absolute;
    bottom: 0%;
    right: 0%;
    background-color: transparent;
    border: none;
    color: #b03a32;
}





@media (max-width: 742px){
    .dish-card{
        position: relative;
    }
}

</style>