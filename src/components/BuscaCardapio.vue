<template>
    <b-input-group class="cardapio-filtro">
        <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
        </b-input-group-prepend>
        <input @input="buscaPrato" v-model="filtro" type="text">
    </b-input-group>
</template>

<script>

export default {

    data() {
        return {
            filtro: ''
        }
    },

    methods: {
        buscaPrato() {
            this.$emit('busca-valor', this.filtro)
        }
    },

}
</script>

<style scoped>

.cardapio-filtro
{
    display: flex;
    align-items: stretch;
    width: 100%;
    padding: 0px 6px;
}

.input-group-text
{
    background-color: transparent;
    border-right: none;
    border-top-right-radius: none;
    border-bottom-right-radius: none
    
}

input
{
    flex-grow: 1;
    border: 1px solid #ced4da;
    border-left: none;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 6px 0;
}


@media (min-width: 770px){
    .cardapio-filtro{
        width: 500px;
    }
}

</style>