<template>
    <div class="lista-collapse">
        <button  @click="visible = !visible" class="edit-bar">
            <span class="title-cardapio" >{{titulo}}</span>
            <ul class="edit-tools">    
                <li><button class="edit-button"><b-icon-plus-circle class="icon" v-b-tooltip.hover title="Novo card"  @click="onClickAdd()"></b-icon-plus-circle></button></li>
                <li><button class="edit-button"><b-icon-pencil class="icon" v-b-tooltip.hover title="Excluir"></b-icon-pencil></button></li>
                <li><button class="edit-button"><b-icon-trash class="icon" v-b-tooltip.hover title="Excluir"></b-icon-trash></button></li>           
            </ul>
        </button>
        <div class="conteudo-grid" :class="{visible}">
            <div v-for="item in items">
                <CardCardapio>
                </CardCardapio>
            </div>
            <div class="card-add card">
                <!-- <b-button @click="$bvModal.show('modal-scoped')">+</b-button> -->
                <button @click="acrescentaItem()">+</button>

            </div>
        </div>
    </div>
</template>

<script>

import CardCardapio from './CardCardapio'

export default {

    props: ['titulo'],

    components: {
        CardCardapio,
    },

    data() {
        return {
            visible: false,
            items: 0,
            modalOpen: false,
            listaPratos: [],
            prato: {
                nome: '',
                descricao: '',
                imagem: ''
            }

        }
    },

    methods: {
        acrescentaItem(){
            this.items++
        },

        adicionaPrato(){
            this.listaPratos.push(prato)
            this.prato = '';
        }



    }

}
</script>

<style scoped>

.card
{
    border: 1px solid rgb(185, 185, 185);
    height: 200px;
    padding: 20px;
    transition: 1s;
}

.card:hover{
    transform: scale(1.01);
    cursor: pointer;
}

.card-add
{
    position: relative;
    padding: 60px;
    background-color: rgba(134, 134, 134, 0.1);
}

.conteudo-grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;
    box-sizing: border-box;
    height: 0px;
    overflow: hidden;
}

.visible{
    height: 100%;   
}

.edit-bar
{
    margin: 6px 0;
    display: grid;
    grid-template-columns: 1fr 120px;
    border: 1px solid grey;
    background-color: rgb(236, 236, 236);
    border-radius: 10px;
    padding: 5px 30px;
    width: 100%;
}

.edit-tools
{
    list-style: none;
    display: flex;
    margin: 0px;
    justify-content: space-around;
    padding: 0px;
    
}

.edit-tools li{
    background-color: transparent;
}

.edit-button{
    background-color: transparent;
    border: none;
    padding: 0;
}

.edit-button:focus{
    outline: none;
}

.icon{
    transform: scale(1.5)
}

.icon:hover{
    transform: scale(1.6);
}

.title-cardapio{
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>