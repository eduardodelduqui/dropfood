<template>
    <div class="corpo">
        <button v-if="editable" @click="visible = !visible" ><h3>{{secao.secao_nome}}</h3></button>
        <button v-else ><h3>{{secao.secao_nome}}</h3></button>
        <div class="dish-list" :class="{visible}">
            <ul class="grid">
                <li class="grid-item" v-for="prato in pratos" v-if="prato.secao_nome == secao.secao_nome">
                    <Dish @adiciona-item="adicionaItem" @prato-removido="removePratoDaLista" :prato="prato" hover modal :editable="editable" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Dish from './Dish'

export default {

    props: {
        pratos: {
            type: Array,
            required: true
        },

        secao: {
            type: Object,
            required: true
        },

        editable: {
            type: Boolean,
            required: false
        }
    },

    components: {
        Dish,
    },

    data() {
        return {
            visible: !this.editable
        }
    },

    methods: {
        adicionaItem(idPrato){
            this.$emit('adiciona-item', idPrato)
        },

        removePratoDaLista(id){
            this.pratos.forEach((prato, index) => {
                if (prato.id == id) {
                    this.pratos.splice(index, 1);
                }
            } )

        }
    },

}
</script>

<style scoped>

.corpo{
    padding: 8px 5px;
    width: 100%;
    margin: 0 auto;
}

.dish-list {
    height: 0px;
    overflow: hidden;
}


.visible 
{
    height: 100%;
    overflow: visible;
}

button
{
    display: block;
    background-color: transparent;
    border: none;
    outline: none;
}

h3{
    margin-bottom: 8px;
    font-size: 25px;

}

@media (max-width: 800px){
    button{
        width: 100%;
        margin: 0 auto;
    }

    .grid-item
    {
        margin: 5px 0;
    }
}

@media (min-width: 800px){

    .grid
    {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
}

</style>