<template>
    <div class="corpo">
        <button @click="visible = !visible" ><h3>{{secao.secao_nome}}</h3></button>
        <div class="dish-list" :class="{visible}">
            <ul class="grid">
                <li class="grid-item" v-for="prato in pratos" v-if="prato.secao_nome == secao.secao_nome">
                    <Dish :prato="prato" hover modal editable />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Dish from '../../components/Dish'

export default {

    props: ['pratos', 'secao'],

    components: {
        Dish,
    },

    data() {
        return {
            visible: false
        }
    },

}
</script>

<style scoped>

.corpo{
    padding: 8px 5px;
}

.dish-list {
    height: 0px;
    overflow: hidden;
}

.grid-item
{
    margin: 5px 0px;
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
    margin: 0px;    
}

@media (max-width: 800px){
    button{
        width: 100%;
        margin: 0 auto;
    }
}

@media (min-width: 800px){

    .grid
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
}

</style>